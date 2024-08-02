const NotFoundError = require("../../commons/exceptions/NotFoundError");
const AlbumRepository = require("../../domains/albums/AlbumRepository");

class AlbumRepositoryPostgres extends AlbumRepository {
    constructor (pool, idGenerator) {
        super();
        this._pool = pool;
        this._idGenerator = idGenerator;
    }

    async postAlbum(postAlbumEntity) {
        const { name, year } = postAlbumEntity;
        const id = `album-${this._idGenerator()}`;
        const query = {
            text: 'INSERT INTO albums VALUES($1, $2, $3) RETURNING id',
            values: [id, name , year],
        };

        const result = await this._pool.query(query);
        return result.rows[0];
    }

    async getAlbumById(albumId) {
        const query = {
            text: 'SELECT * FROM albums WHERE id = $1',
            values: [albumId],
        };

        const result = await this._pool.query(query);
        if (!result.rowCount) {
            throw new NotFoundError('album tidak ditemukan');
        }
        return result.rows[0];
    }
}

module.exports = AlbumRepositoryPostgres;