const GetSongs = require("../../domains/songs/entities/GetSongs");

class GetSongsUseCase {
  constructor({ songRepository }) {
    this._songRepository = songRepository;
  }

  async execute(useCasePayload) {
    const { title, performer } = useCasePayload;
    const result = await this._songRepository.getSongs({ title, performer });
    const songs = result.map((song) => new GetSongs(song));
    return songs;
  }
}

module.exports = GetSongsUseCase;