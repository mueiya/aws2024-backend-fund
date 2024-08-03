class PutSong {
    constructor(payload) {
      this._validatePayload(payload);
  
      this.title = payload.title;
      this.year = payload.year;
      this.genre = payload.genre;
      this.performer = payload.performer;
      this.duration = payload.duration;
      this.albumId = payload.albumId;
    }
  
    _validatePayload({ title, year, genre, performer, duration, albumId }) {
      if (!title || !year || !genre || !performer) {
        throw new Error("PUT_ALBUM.NOT_CONTAIN_NEEDED_PROPERTY");
      }
  
      if (typeof title !== "string" || typeof year !== "number" || typeof genre !== "string" ) {
        throw new Error("PUT_ALBUM.NOT_MEET_DATA_TYPE_SPECIFICATION");
      }
  
      if (duration && typeof duration !== "number") {
        throw new Error("PUT_ALBUM.NOT_MEET_DATA_TYPE_SPECIFICATION");
      }
  
      if (albumId && typeof albumId !== "string") {
        throw new Error("PUT_ALBUM.NOT_MEET_DATA_TYPE_SPECIFICATION");
      }
    }
  }
  
  module.exports = PutSong;
  