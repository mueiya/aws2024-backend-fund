const { nanoid } = require("nanoid");
const pool = require("./database/postgres/pool");
const AlbumRepositoryPostgres = require("./repository/AlbumRepositoryPostgres");
const PostAlbumUseCase = require("../applications/use_case/PostAlbumUseCase");
const AlbumsHandler = require("../interfaces/http/api/albums/handlers");
const GetAlbumByIdUseCase = require("../applications/use_case/GetAlbumByIdUseCase");
const PutAlbumByIdUseCase = require("../applications/use_case/PutAlbumByIdUseCase");

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
// Handler
const albumsHandler = new AlbumsHandler({
  postAlbumUseCase,
  getAlbumByIdUseCase,
  putAlbumByIdUseCase,
});

module.exports = {
  albumsHandler,
};
