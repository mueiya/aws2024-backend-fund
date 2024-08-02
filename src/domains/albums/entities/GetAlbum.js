class GetAlbum {
    constructor(payload) {
        this._validatePayload(payload);

        this.id = payload.id;
        this.name = payload.name;
        this.year = payload.year;
    }

    _validatePayload({ id, name, year }) {
        if (!id || !name || !year) {
            throw new Error("GET_ALBUM.NOT_CONTAIN_NEEDED_PROPERTY");
        }

        if (typeof id !== "string" || typeof name !== "string" || typeof year !== "number") {
            throw new Error("GET_ALBUM.NOT_MEET_DATA_TYPE_SPECIFICATION");
        }
    }
}

module.exports = GetAlbum;