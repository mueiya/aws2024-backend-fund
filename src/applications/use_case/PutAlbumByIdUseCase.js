const PutAlbum = require("../../domains/albums/entities/PutAlbum");

class PutAlbumByIdUseCase {
  constructor({ albumRepository }) {
    this._albumRepository = albumRepository;
  }

  async execute(useCasePayload) {
    const { albumId } = useCasePayload;
    await this._albumRepository.verifyAlbumById(albumId);
    const putAlbumEntity = new PutAlbum(useCasePayload);
    return this._albumRepository.putAlbumById(albumId, putAlbumEntity);
  }
}

module.exports = PutAlbumByIdUseCase;
