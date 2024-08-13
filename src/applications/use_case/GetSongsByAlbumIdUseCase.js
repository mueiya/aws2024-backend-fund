const GetSongs = require("../../domains/songs/entities/GetSongs");
const GetSongsItems = require("../../domains/songs/entities/GetSongsItems");

class GetSongsByAlbumIdUseCase {
  constructor({ songRepository }) {
    this._songRepository = songRepository;
  }

  async execute(useCasePayload) {
    const { albumId } = useCasePayload;
    const result = await this._songRepository.getSongsByAlbumId(albumId);
    // const songs = result.map((song) => new GetSongsItems(song));
    // return songs;
    return new GetSongs({
      songArray: result.map((song) => new GetSongsItems(song)),
    });
  }
}

module.exports = GetSongsByAlbumIdUseCase;
