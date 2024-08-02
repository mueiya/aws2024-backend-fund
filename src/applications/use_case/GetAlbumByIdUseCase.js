const GetAlbum = require("../../domains/albums/entities/GetAlbum");

class GetAlbumByIdUseCase {
    constructor({ albumRepository }) {
        this._albumRepository = albumRepository;
    }
    
    async execute(useCasePayload) {
        const { albumId } = useCasePayload;
        const getAlbumResult = await this._albumRepository.getAlbumById(albumId);
        return new GetAlbum(getAlbumResult);
    }
}

module.exports = GetAlbumByIdUseCase;