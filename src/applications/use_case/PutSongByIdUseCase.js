const PutSong = require("../../domains/songs/entities/PutSong");

class PutSongByIdUseCase {
  constructor({ songRepository }) {
    this._songRepository = songRepository;
  }

  async execute(useCasePayload) {
    const { songId } = useCasePayload;
    await this._songRepository.verifySongById(songId);
    const putSongEntity = new PutSong(useCasePayload);
    return this._songRepository.putSongById(songId, putSongEntity);
  }
}

module.exports = PutSongByIdUseCase;
