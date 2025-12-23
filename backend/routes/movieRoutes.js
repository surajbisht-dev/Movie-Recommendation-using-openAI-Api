const express = require("express");
const router = express.Router();
const { getRecommendations } = require("../controllers/movieController");

router.post("/", getRecommendations);

module.exports = router;
