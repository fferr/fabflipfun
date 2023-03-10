"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {
    const extensionService = strapi.plugin("graphql").service("extension");

    // not cool, but it works
    // CORS isnt working with apollo client in web
    extensionService.use({
      resolversConfig: {
        "Query.videos": {
          auth: false,
        },
      },
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    var io = require("socket.io")(strapi.server.httpServer, {
      cors: {
        // cors setup
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true,
      },
    });
    io.on("connection", function (socket) {
      //Listening for a connection from the frontend
      // socket.on("join", ({ username }) => {
      // });
    });

    strapi.socket = io;
  },
};
