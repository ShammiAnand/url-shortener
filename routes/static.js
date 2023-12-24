const express = require("express");
const router = express.Router();
const URL = require("../models/url");

const { handleHome } = require("../controllers/static");

router.get("/", handleHome);

module.exports = router;
