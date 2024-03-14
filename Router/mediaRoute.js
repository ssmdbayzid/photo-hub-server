const { getAllMedia } = require("../controller/mediaController")

const mediaRoute = require("express").Router()

mediaRoute.get("/", getAllMedia);

module.exports = mediaRoute