module.exports = {
  afterCreate(event) {
    const {
      data,
      // where, select, populate
    } = event.params;
    console.log("event::", event);
    strapi.socket.emit("message", { product: { data } });
  },
};
