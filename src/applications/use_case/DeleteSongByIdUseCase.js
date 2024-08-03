class DeleteSongByIdUseCase {
    constructor({ songRepository }) {
      this._songRepository = songRepository;
    }
  
    async execute(useCasePayload) {
      const { songId } = useCasePayload;
      await this._songRepository.verifySongById(songId);
      return this._songRepository.deleteSongById(songId);
    }
  }
  
  module.exports = DeleteSongByIdUseCase;
  