class AlbumsHandler {
  constructor({ postAlbumUseCase, getAlbumByIdUseCase }) {
    this._postAlbumUseCase = postAlbumUseCase;
    this._getAlbumByIdUseCase = getAlbumByIdUseCase;

    this.postAlbumHandler = this.postAlbumHandler.bind(this);
    this.getAlbumByIdHandler = this.getAlbumByIdHandler.bind(this);
  }

  async postAlbumHandler(request, h) {
    const { name, year } = request.payload;
    const useCasePayload = { name, year };

    const result = await this._postAlbumUseCase.execute(useCasePayload);

    return h
      .response({
        status: "success",
        data: {
          albumId: result.id,
        },
      })
      .code(201);
  }

  async getAlbumByIdHandler(request, h) {
    const { id } = request.params;

    const result = await this._getAlbumByIdUseCase.execute({ albumId: id });

    return h
      .response({
        status: "success",
        data: {
          album: result,
        },
      })
      .code(200);
  }
}

module.exports = AlbumsHandler;
