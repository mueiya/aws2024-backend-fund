class AlbumsHandler {
  constructor({
    postAlbumUseCase,
    getAlbumByIdUseCase,
    putAlbumByIdUseCase,
    deleteAlbumByIdUseCase,
  }) {
    this._postAlbumUseCase = postAlbumUseCase;
    this._getAlbumByIdUseCase = getAlbumByIdUseCase;
    this._putAlbumByIdUseCase = putAlbumByIdUseCase;
    this._deleteAlbumByIdUseCase = deleteAlbumByIdUseCase;

    this.postAlbumHandler = this.postAlbumHandler.bind(this);
    this.getAlbumByIdHandler = this.getAlbumByIdHandler.bind(this);
    this.putAlbumByIdHandler = this.putAlbumByIdHandler.bind(this);
    this.deleteAlbumByIdHandler = this.deleteAlbumByIdHandler.bind(this);
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

  async putAlbumByIdHandler(request, h) {
    const { id } = request.params;
    const { name, year } = request.payload;
    const useCasePayload = { albumId: id, name, year };

    await this._putAlbumByIdUseCase.execute(useCasePayload);

    return h.response({
      status: "success",
      message: "Album berhasil diperbarui",
    });
  }

  async deleteAlbumByIdHandler(request, h) {
    const { id } = request.params;
    const useCasePayload = { albumId: id };

    await this._deleteAlbumByIdUseCase.execute(useCasePayload);

    return h.response({
      status: "success",
      message: "Album berhasil dihapus",
    });
  }
}

module.exports = AlbumsHandler;
