const routes = require("./routes");
const { albumsHandler } = require("../../../../infrastructures/di-container");

const albumsPlugin = {
  name: "albums",
  version: "1.0.0",
  async register(server) {
    server.route(routes(albumsHandler));
  },
};

module.exports = albumsPlugin;
