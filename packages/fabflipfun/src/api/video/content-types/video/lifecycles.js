module.exports = {
  afterUpdate(event) {
    const {
      data,
      // where, select, populate
    } = event.params;
    console.log("event::", event);

    // means it was a publish event
    if (data.publishedAt) {
      strapi.socket.emit("new-video", event);
    }
  },
};
