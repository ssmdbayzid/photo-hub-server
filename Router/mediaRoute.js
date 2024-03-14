const { getAllMedia, postMedia, getMedia, postComment } = require("../controller/mediaController")

const mediaRoute = require("express").Router()

mediaRoute.get("/", getAllMedia);
mediaRoute.get("/:id", getMedia);

mediaRoute.post("/", postMedia);
mediaRoute.put("/:id/comment", postComment);


module.exports = mediaRoute