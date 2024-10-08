const SongRepository = require("../../domains/songs/SongRepository");
const NotFoundError = require("../../commons/exceptions/NotFoundError");

class SongRepositoryPostgres extends SongRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }
  async postSong(postSongEntity) {
    const { title, year, genre, performer, duration, albumId } = postSongEntity;
    const id = `song-${this._idGenerator()}`;
    const query = {
      text: "INSERT INTO songs VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id",
      values: [id, title, year, genre, performer, duration, albumId],
    };
    const result = await this._pool.query(query);
    return result.rows[0];
  }

  async getSongs({ title, performer }) {
    let query;
    if (!title && !performer) {
      query = {
        text: "SELECT * FROM songs",
      };
    } else {
      query = {
        text: `SELECT * FROM songs WHERE ${title ? "title ILIKE $1" : ""} ${
          title && performer ? "AND" : ""
        } ${performer ? `performer ILIKE $${title ? "2" : "1"}` : ""}`,
        values: [
          title ? `%${title}%` : undefined,
          performer ? `%${performer}%` : undefined,
        ].filter(Boolean),
      };
    }

    const result = await this._pool.query(query);
    return result.rows;
  }

  async getSongById(songId) {
    const query = {
      text: "SELECT * FROM songs WHERE id = $1",
      values: [songId],
    };

    const result = await this._pool.query(query);
    if (!result.rowCount) {
      throw new NotFoundError("song tidak ditemukan");
    }
    return result.rows[0];
  }

  async verifySongById(songId) {
    const query = {
      text: "SELECT id FROM songs WHERE id = $1",
      values: [songId],
    };

    const result = await this._pool.query(query);
    if (!result.rowCount) {
      throw new NotFoundError("song tidak ditemukan");
    }
  }

  async getSongsByAlbumId(albumId) {
    const query = {
      text: "SELECT * FROM songs WHERE album = $1",
      values: [albumId],
    };

    const result = await this._pool.query(query);
    return result.rows;
  }

  async putSongById(songId, putSongEntity) {
    const { title, year, genre, performer, duration, albumId } = putSongEntity;
    const query = {
      text: "UPDATE songs SET title = $1, year = $2, genre = $3, performer = $4, duration = $5, album = $6 WHERE id = $7 RETURNING id",
      values: [title, year, genre, performer, duration, albumId, songId],
    };

    await this._pool.query(query);
  }

  async deleteSongById(songId) {
    const query = {
      text: "DELETE FROM songs WHERE id = $1 RETURNING id",
      values: [songId],
    };

    await this._pool.query(query);
  }
}

module.exports = SongRepositoryPostgres;
