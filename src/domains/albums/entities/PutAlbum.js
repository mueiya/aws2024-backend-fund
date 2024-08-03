class PutAlbum {
    constructor(payload) {
      this._validatePayload(payload);
  
      this.name = payload.name;
      this.year = payload.year;
    }
  
    _validatePayload({ name, year }) {
      if (!name || !year) {
        throw new Error("PUT_ALBUM.NOT_CONTAIN_NEEDED_PROPERTY");
      }
  
      if (typeof name !== "string" || typeof year !== "number") {
        throw new Error("PUT_ALBUM.NOT_MEET_DATA_TYPE_SPECIFICATION");
      }
    }
  }
  
  module.exports = PutAlbum;
  