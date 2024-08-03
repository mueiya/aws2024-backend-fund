const GetAlbum = require("../../domains/albums/entities/GetAlbum");

class GetAlbumByIdUseCase {
  constructor({ albumRepository, getSongByAlbumIdUseCase }) {
    this._albumRepository = albumRepository;
    this._getSongByAlbumIdUseCase = getSongByAlbumIdUseCase;
  }

  async execute(useCasePayload) {
    const { albumId } = useCasePayload;
    const getAlbumResult = await this._albumRepository.getAlbumById(albumId);
    const songs = await this._getSongByAlbumIdUseCase.execute({ albumId });
    return new GetAlbum({ songs: songs, ...getAlbumResult });
  }
}

module.exports = GetAlbumByIdUseCase;
