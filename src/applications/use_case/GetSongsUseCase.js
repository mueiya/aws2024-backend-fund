const GetSongs = require("../../domains/songs/entities/GetSongs");
const GetSongsItems = require("../../domains/songs/entities/GetSongsItems");

class GetSongsUseCase {
  constructor({ songRepository }) {
    this._songRepository = songRepository;
  }

  async execute(useCasePayload) {
    const { title, performer } = useCasePayload;
    const result = await this._songRepository.getSongs({ title, performer });
    // const songs = result.map((song) => new GetSongsItems(song));
    // return songs;
    return new GetSongs({
      songArray: result.map((song) => new GetSongsItems(song)),
    });
  }
}

module.exports = GetSongsUseCase;
