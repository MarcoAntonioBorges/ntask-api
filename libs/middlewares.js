module.exports = app => {
    app.set("port", process.env.APP_PORT || 3000);
    app.set("json spaces", 4);
}