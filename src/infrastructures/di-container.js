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
// handlers
const AlbumsHandler = require("../interfaces/http/api/albums/handlers");
const SongsHandler = require("../interfaces/http/api/songs/handlers");

/**
 * Albums Dependency Injection Container
 */
// Repository
const albumRepositoryPostgres = new AlbumRepositoryPostgres(pool, nanoid);
// Use Case
const postAlbumUseCase = new PostAlbumUseCase({
  albumRepository: albumRepositoryPostgres,
});
const getAlbumByIdUseCase = new GetAlbumByIdUseCase({
  albumRepository: albumRepositoryPostgres,
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
// Repository
const songRepositoryPostgres = new SongRepositoryPostgres(pool, nanoid);
// Use Case
const postSongUseCase = new PostSongUseCase({
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
})

module.exports = {
  albumsHandler,
  songsHandler,
};
