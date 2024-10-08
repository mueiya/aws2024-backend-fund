const NotFoundError = require("../../commons/exceptions/NotFoundError");
const AlbumRepository = require("../../domains/albums/AlbumRepository");

class AlbumRepositoryPostgres extends AlbumRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async postAlbum(postAlbumEntity) {
    const { name, year } = postAlbumEntity;
    const id = `album-${this._idGenerator()}`;
    const query = {
      text: "INSERT INTO albums VALUES($1, $2, $3) RETURNING id",
      values: [id, name, year],
    };

    const result = await this._pool.query(query);
    return result.rows[0];
  }

  async getAlbumById(albumId) {
    const query = {
      text: "SELECT * FROM albums WHERE id = $1",
      values: [albumId],
    };

    const result = await this._pool.query(query);
    if (!result.rowCount) {
      throw new NotFoundError("album tidak ditemukan");
    }
    return result.rows[0];
  }

  async verifyAlbumById(albumId) {
    const query = {
      text: "SELECT id FROM albums WHERE id = $1",
      values: [albumId],
    };

    const result = await this._pool.query(query);
    if (!result.rowCount) {
      throw new NotFoundError("album tidak ditemukan");
    }
  }

  async putAlbumById(albumId, putAlbumEntity) {
    const { name, year } = putAlbumEntity;
    const query = {
      text: "UPDATE albums SET name = $1, year = $2 WHERE id = $3 RETURNING id",
      values: [name, year, albumId],
    };

    await this._pool.query(query);
  }

  async deleteAlbumById(albumId) {
    const query = {
      text: "DELETE FROM albums WHERE id = $1 RETURNING id",
      values: [albumId],
    };

    await this._pool.query(query);
  }
}

module.exports = AlbumRepositoryPostgres;
