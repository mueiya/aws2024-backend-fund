const PostAlbum = require("../../domains/albums/entities/PostAlbum");
const PostedAlbum = require("../../domains/albums/entities/PostedAlbum");

class PostAlbumUseCase {
  constructor({ albumRepository }) {
    this._albumRepository = albumRepository;
  }

  async execute(useCasePayload) {
    const postAlbumEntity = new PostAlbum(useCasePayload);
    const postAlbumResult =
      await this._albumRepository.postAlbum(postAlbumEntity);
    return new PostedAlbum(postAlbumResult);
  }
}

module.exports = PostAlbumUseCase;
