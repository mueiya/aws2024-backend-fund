const GetSongs = require("../../domains/songs/entities/GetSongs");

class GetSongsByAlbumIdUseCase {
  constructor({ songRepository }) {
    this._songRepository = songRepository;
  }

  async execute(useCasePayload) {
    const { albumId } = useCasePayload;
    const result = await this._songRepository.getSongsByAlbumId(albumId);
    const songs = result.map((song) => new GetSongs(song));
    return songs;
  }
}

module.exports = GetSongsByAlbumIdUseCase;