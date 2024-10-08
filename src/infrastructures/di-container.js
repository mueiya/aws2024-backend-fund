const { nanoid } = require("nanoid");
const pool = require("./database/postgres/pool");
//repositories
const AlbumRepositoryPostgres = require("./repository/AlbumRepositoryPostgres");
const SongRepositoryPostgres = require("./repository/SongRepositoryPostgres");
// album use cases
const PostAlbumUseCase = require("../applications/use_case/PostAlbumUseCase");
const GetAlbumByIdUseCase = require("../applications/use_case/GetAlbumByIdUseCase");
const PutAlbumByIdUseCase = require("../applications/use_case/PutAlbumByIdUseCase");
const DeleteAlbumByIdUseCase = require("../applications/use_case/DeleteAlbumByIdUseCase");
// song use case
const PostSongUseCase = require("../applications/use_case/PostSongUseCase");
const GetSongsUseCase = require("../applications/use_case/GetSongsUseCase");
// handlers
const AlbumsHandler = require("../interfaces/http/api/albums/handlers");
const SongsHandler = require("../interfaces/http/api/songs/handlers");
const GetSongByIdUseCase = require("../applications/use_case/GetSongByIdUseCase");
const PutSongByIdUseCase = require("../applications/use_case/PutSongByIdUseCase");
const DeleteSongByIdUseCase = require("../applications/use_case/DeleteSongByIdUseCase");
const GetSongsByAlbumIdUseCase = require("../applications/use_case/GetSongsByAlbumIdUseCase");

// Repository
const songRepositoryPostgres = new SongRepositoryPostgres(pool, nanoid);
const albumRepositoryPostgres = new AlbumRepositoryPostgres(pool, nanoid);
/**
 * Albums Dependency Injection Container
 */
// Use Case
const getSongByAlbumIdUseCase = new GetSongsByAlbumIdUseCase({
  songRepository: songRepositoryPostgres,
});
const postAlbumUseCase = new PostAlbumUseCase({
  albumRepository: albumRepositoryPostgres,
});
const getAlbumByIdUseCase = new GetAlbumByIdUseCase({
  albumRepository: albumRepositoryPostgres,
  getSongByAlbumIdUseCase,
});
const putAlbumByIdUseCase = new PutAlbumByIdUseCase({
  albumRepository: albumRepositoryPostgres,
});
const deleteAlbumByIdUseCase = new DeleteAlbumByIdUseCase({
  albumRepository: albumRepositoryPostgres,
});

/**
 * Songs Dependency Injection Container
 */
// Use Case
const postSongUseCase = new PostSongUseCase({
  songRepository: songRepositoryPostgres,
});
const getSongsUseCase = new GetSongsUseCase({
  songRepository: songRepositoryPostgres,
});
const getSongByIdUseCase = new GetSongByIdUseCase({
  songRepository: songRepositoryPostgres,
});
const putSongByIdUseCase = new PutSongByIdUseCase({
  songRepository: songRepositoryPostgres,
});
const deleteSongByIdUseCase = new DeleteSongByIdUseCase({
  songRepository: songRepositoryPostgres,
});

/**
 * Instantiate Handlers
 */
const albumsHandler = new AlbumsHandler({
  postAlbumUseCase,
  getAlbumByIdUseCase,
  putAlbumByIdUseCase,
  deleteAlbumByIdUseCase,
});
const songsHandler = new SongsHandler({
  postSongUseCase,
  getSongsUseCase,
  getSongByIdUseCase,
  putSongByIdUseCase,
  deleteSongByIdUseCase,
});

module.exports = {
  albumsHandler,
  songsHandler,
};
