class PostedSong {
  constructor(payload) {
    this._validatePayload(payload);

    this.id = payload.id;
  }

  _validatePayload({ id }) {
    if (!id) {
      throw new Error("POSTED_ALBUM.NOT_CONTAIN_NEEDED_PROPERTY");
    }

    if (typeof id !== "string") {
      throw new Error("POSTED_ALBUM.NOT_MEET_DATA_TYPE_SPECIFICATION");
    }
  }
}

module.exports = PostedSong;
