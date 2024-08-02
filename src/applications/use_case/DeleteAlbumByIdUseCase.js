class DeleteAlbumByIdUseCase {
  constructor({ albumRepository }) {
    this._albumRepository = albumRepository;
  }

  async execute(useCasePayload) {
    const { albumId } = useCasePayload;
    await this._albumRepository.verifyAlbumById(albumId);
    return this._albumRepository.deleteAlbumById(albumId);
  }
}

module.exports = DeleteAlbumByIdUseCase;
