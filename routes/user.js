const express = require("express");
const router = express.Router();
const User = require("../models/user");

const { handleCreateUser, handleUserLogIn } = require("../controllers/user");

router.post("/", handleCreateUser);
router.post("/login", handleUserLogIn);

module.exports = router;
