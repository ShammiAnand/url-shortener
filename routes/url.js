const express = require("express");
const router = express.Router();

const {
  handleRedirectUrl,
  handleCreateShortUrl,
  handleGetAnalytics,
} = require("../controllers/url");

router.post("/", handleCreateShortUrl);
router.get("/:shortUrl", handleRedirectUrl);
router.get("/analytics/:shortUrl", handleGetAnalytics);

module.exports = router;
