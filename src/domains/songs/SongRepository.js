/* eslint-disable no-unused-vars */
class SongRepository {
  async postSong(postSongEntity) {
    throw new Error("SONG_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }
  async getSongs({ title, performer }) {
    throw new Error("SONG_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }
  async getSongById(songId) {
    throw new Error("SONG_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }
  async getSongsByAlbumId(albumId) {
    throw new Error("SONG_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }
  async verifySongById(songId) {
    throw new Error("SONG_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }
  async putSongById(songId, putSongEntity) {
    throw new Error("SONG_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }
  async deleteSongById(songId) {
    throw new Error("SONG_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }
}

module.exports = SongRepository;
