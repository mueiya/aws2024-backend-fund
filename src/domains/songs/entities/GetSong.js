class GetSong {
  constructor(payload) {
    this._validatePayload(payload);

    this.id = payload.id;
    this.title = payload.title;
    this.year = payload.year;
    this.genre = payload.genre;
    this.performer = payload.performer;
    this.duration = payload.duration;
    this.albumId = payload.albumId;
  }

  _validatePayload({ id, title, year, genre, performer, duration, albumId }) {
    if (!id || !title || !year || !genre || !performer) {
      throw new Error("GET_ALBUM.NOT_CONTAIN_NEEDED_PROPERTY");
    }

    if (
      typeof id !== "string" ||
      typeof title !== "string" ||
      typeof year !== "number" ||
      typeof genre !== "string"
    ) {
      throw new Error("GET_ALBUM.NOT_MEET_DATA_TYPE_SPECIFICATION");
    }

    if (duration && typeof duration !== "number") {
      throw new Error("GET_ALBUM.NOT_MEET_DATA_TYPE_SPECIFICATION");
    }

    if (albumId && typeof albumId !== "string") {
      throw new Error("GET_ALBUM.NOT_MEET_DATA_TYPE_SPECIFICATION");
    }
  }
}

module.exports = GetSong;
