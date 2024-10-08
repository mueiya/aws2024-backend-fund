class SongsHandler {
  constructor({
    postSongUseCase,
    getSongsUseCase,
    getSongByIdUseCase,
    putSongByIdUseCase,
    deleteSongByIdUseCase,
  }) {
    this._postSongUseCase = postSongUseCase;
    this._getSongsUseCase = getSongsUseCase;
    this._getSongByIdUseCase = getSongByIdUseCase;
    this._putSongByIdUseCase = putSongByIdUseCase;
    this._deleteSongByIdUseCase = deleteSongByIdUseCase;

    this.postSongHandler = this.postSongHandler.bind(this);
    this.getSongsHandler = this.getSongsHandler.bind(this);
    this.getSongByIdHandler = this.getSongByIdHandler.bind(this);
    this.putSongByIdHandler = this.putSongByIdHandler.bind(this);
    this.deleteSongByIdHandler = this.deleteSongByIdHandler.bind(this);
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
    const { title, performer } = request.query;
    const useCasePayload = { title, performer };
    const result = await this._getSongsUseCase.execute(useCasePayload);
    return h
      .response({
        status: "success",
        data: {
          songs: result.songArray,
        },
      })
      .code(200);
  }

  async getSongByIdHandler(request, h) {
    const { id } = request.params;

    const result = await this._getSongByIdUseCase.execute({ songId: id });

    return h
      .response({
        status: "success",
        data: {
          song: result,
        },
      })
      .code(200);
  }

  async putSongByIdHandler(request, h) {
    const { id } = request.params;
    const { title, year, genre, performer, duration, albumId } =
      request.payload;
    const useCasePayload = {
      songId: id,
      title,
      year,
      genre,
      performer,
      duration,
      albumId,
    };

    await this._putSongByIdUseCase.execute(useCasePayload);

    return h
      .response({
        status: "success",
        message: "lagu berhasil diperbarui",
      })
      .code(200);
  }

  async deleteSongByIdHandler(request, h) {
    const { id } = request.params;

    await this._deleteSongByIdUseCase.execute({ songId: id });

    return h
      .response({
        status: "success",
        message: "lagu berhasil dihapus",
      })
      .code(200);
  }
}

module.exports = SongsHandler;
