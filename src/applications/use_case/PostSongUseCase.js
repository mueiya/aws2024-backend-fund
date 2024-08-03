const PostedSong = require("../../domains/songs/entities/PostedSong");
const PostSong = require("../../domains/songs/entities/PostSong");

class PostSongUseCase {
  constructor({ songRepository }) {
    this._songRepository = songRepository;
  }

  async execute(useCasePayload) {
    console.log(useCasePayload);
    const postSongEntity = new PostSong(useCasePayload);
    console.log(postSongEntity)
    const postSongResult = await this._songRepository.postSong(postSongEntity);
    console.log(postSongResult);
    return new PostedSong(postSongResult);
  }
}

module.exports = PostSongUseCase;
