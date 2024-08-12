class GetSongs {
  constructor(payload) {
    this._validatePayload(payload);

    this.id = payload.id;
    this.title = payload.title;
    this.performer = payload.performer;
  }

  _validatePayload({ id, title, performer }) {
    if (!id || !title || !performer) {
      throw new Error("GET_SONGS.NOT_CONTAIN_NEEDED_PROPERTY");
    }

    if (
      typeof id !== "string" ||
      typeof title !== "string" ||
      typeof performer !== "string"
    ) {
      throw new Error("GET_SONGS.NOT_MEET_DATA_TYPE_SPECIFICATION");
    }
  }
}

module.exports = GetSongs;
