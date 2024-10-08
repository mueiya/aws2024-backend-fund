const Hapi = require("@hapi/hapi");
// Plugins
const albums = require("../../interfaces/http/api/albums");
const songs = require("../../interfaces/http/api/songs");

// Error Handler
const DomainErrorTranslator = require("../../commons/exceptions/DomainErrorTranslator");
const ClientError = require("../../commons/exceptions/ClientError");

const createServer = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  await server.register([
    {
      plugin: albums,
    },
    {
      plugin: songs,
    },
  ]);

  server.route({
    method: "GET",
    path: "/",
    handler: () => {
      return "Hello World!";
    },
  });

  server.ext("onPreResponse", (request, h) => {
    const { response } = request;
    if (response instanceof Error) {
      const translatedError = DomainErrorTranslator.translate(response);

      if (translatedError instanceof ClientError) {
        const newResponse = h.response({
          status: "fail",
          message: translatedError.message,
        });
        newResponse.code(translatedError.statusCode);
        return newResponse;
      }

      if (translatedError.isServer) {
        return h
          .response({
            status: "error",
            message: "terjadi kegagalan pada server kami",
          })
          .code(500);
      }

      return h.continue;
    }
    return h.continue;
  });

  return server;
};

module.exports = createServer;
