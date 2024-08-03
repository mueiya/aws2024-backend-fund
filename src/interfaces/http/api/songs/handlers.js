class SongsHandler {
  constructor({ postSongUseCase, getSongsUseCase }) {
    this._postSongUseCase = postSongUseCase;
    this._getSongsUseCase = getSongsUseCase;

    this.postSongHandler = this.postSongHandler.bind(this);
    this.getSongsHandler = this.getSongsHandler.bind(this);
  }

  async postSongHandler(request, h) {
    const { title, year, genre, performer, duration, albumId } =
      request.payload;
    const useCasePayload = { title, year, genre, performer, duration, albumId };

    const result = await this._postSongUseCase.execute(useCasePayload);

    return h
      .response({
        status: "success",
        data: {
          songId: result.id,
        },
      })
      .code(201);
  }

  async getSongsHandler(request, h) {
    const songs = await this._getSongsUseCase.execute();
    return h
      .response({
        status: "success",
        data: {
          songs,
        },
      })
      .code(200);
  }
}

module.exports = SongsHandler;
