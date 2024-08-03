class SongsHandler {
    constructor({ postSongUseCase }) {
        this._postSongUseCase = postSongUseCase;

        this.postSongHandler = this.postSongHandler.bind(this);
    }

    async postSongHandler(request, h) {
        const { title, year, genre, performer, duration, albumId } = request.payload;
        const useCasePayload = { title, year, genre, performer, duration, albumId };

        const result = await this._postSongUseCase.execute(useCasePayload);

        return h
            .response({
                status: "success",
                data: {
                    songId: result.id,
                },
            })
            .code(201);
    }
}

module.exports = SongsHandler;