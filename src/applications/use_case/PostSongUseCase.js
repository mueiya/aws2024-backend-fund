const PostedSong = require("../../domains/songs/entities/PostedSong");
const PostSong = require("../../domains/songs/entities/PostSong");

class PostSongUseCase {
  constructor({ songRepository }) {
    this._songRepository = songRepository;
  }

  async execute(useCasePayload) {
    const postSongEntity = new PostSong(useCasePayload);
    const postSongResult = await this._songRepository.postSong(postSongEntity);
    return new PostedSong(postSongResult);
  }
}

module.exports = PostSongUseCase;
