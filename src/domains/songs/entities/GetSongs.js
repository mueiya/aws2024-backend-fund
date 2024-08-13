const GetSongsItems = require("./GetSongsItems");

class GetSongs {
  constructor(payload) {
    this._validatePayload(payload);

    this.songArray = payload.songArray;
  }

  _validatePayload({ songArray }) {
    if (!Array.isArray(songArray)) {
      throw new Error("GET_SONGS.NOT_ARRAY");
    }

    songArray.forEach((song) => {
      if (song instanceof GetSongsItems !== true) {
        throw new Error("GET_SONGS.ITEMS_NOT_MEET_DATA_TYPE_SPECIFICATION");
      }
    });
  }
}

module.exports = GetSongs;
