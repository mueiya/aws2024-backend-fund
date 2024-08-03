const { songsHandler } = require("../../../../infrastructures/di-container");
const routes = require("./routes");

const songsPlugin = {
  name: "songs",
  version: "1.0.0",
  async register(server) {
    server.route(routes(songsHandler));
  },
};

module.exports = songsPlugin;
