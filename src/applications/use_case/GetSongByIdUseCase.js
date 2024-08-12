const GetSong = require("../../domains/songs/entities/GetSong");

class GetSongByIdUseCase {
  constructor({ songRepository }) {
    this._songRepository = songRepository;
  }

  async execute(useCasePayload) {
    const { songId } = useCasePayload;
    const getSongResult = await this._songRepository.getSongById(songId);
    return new GetSong(getSongResult);
  }
}

module.exports = GetSongByIdUseCase;
