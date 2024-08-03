const GetSongs = require("../../songs/entities/GetSongs");

class GetAlbum {
    constructor(payload) {
        this._validatePayload(payload);

        this.id = payload.id;
        this.name = payload.name;
        this.year = payload.year;
        this.songs = payload.songs;
    }

    _validatePayload({ id, name, year, songs }) {
        if (!id || !name || !year) {
            throw new Error("GET_ALBUM.NOT_CONTAIN_NEEDED_PROPERTY");
        }

        if (typeof id !== "string" || typeof name !== "string" || typeof year !== "number") {
            throw new Error("GET_ALBUM.NOT_MEET_DATA_TYPE_SPECIFICATION");
        }

        if (songs){
            if (!Array.isArray(songs)) {
                throw new Error("GET_ALBUM.SONGS_NOT_ARRAY");
            }

            songs.forEach((song) => {
                if (song instanceof GetSongs !== true) {
                    throw new Error("GET_ALBUM.ITEMS_NOT_MEET_DATA_TYPE_SPECIFICATION");
                }
            });
        }
    }
}

module.exports = GetAlbum;