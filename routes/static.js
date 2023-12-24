const express = require("express");
const router = express.Router();
const URL = require("../models/url");

const { handleHome } = require("../controllers/static");

router.get("/", handleHome);
router.get("/signup", (req, res) => {
  return res.render("signup");
});
router.get("/login", (req, res) => {
  return res.render("login");
});

module.exports = router;
