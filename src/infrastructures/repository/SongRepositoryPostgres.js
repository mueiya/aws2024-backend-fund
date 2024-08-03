const SongRepository = require("../../domains/songs/SongRepository");

class SongRepositoryPostgres extends SongRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }
  async postSong(postSongEntity) {
    const { title, year, genre, performer, duration, albumId } = postSongEntity;
    const id = `song-${this._idGenerator()}`;
    console.log(id, title, year, genre, performer, duration, albumId);
    const query = {
      text: "INSERT INTO songs VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id",
      values: [id, title, year, genre, performer, duration, albumId],
    };
    const result = await this._pool.query(query);
    console.log(result);
    return result.rows[0];
  }

  async getSongs() {
    const query = {
      text: "SELECT * FROM songs",
    };
    const result = await this._pool.query(query);
    return result.rows;
  }
}

module.exports = SongRepositoryPostgres;
