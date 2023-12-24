const User = require("../models/user");
const URL = require("../models/url");
const { v4: uuidv4 } = require("uuid");
const { setUserWithId } = require("../services/auth");

const handleCreateUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
  });
  const sessionId = uuidv4();
  setUserWithId(sessionId, user);
  res.cookie("uid", sessionId);
  // const allUrl = await URL.find({ createdBy: user._id });
  // return res.render("home", {
  //   urls: allUrl,
  // });
  res.redirect("/");
};

const handleUserLogIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    res.render("login", {
      error: "wrong email or password",
    });
  }

  const sessionId = uuidv4();
  setUserWithId(sessionId, user);
  res.cookie("uid", sessionId);
  // const allUrl = await URL.find({ createdBy: user._id });
  // return res.render("home", {
  //   urls: allUrl,
  // });
  res.redirect("/");
};

module.exports = {
  handleCreateUser,
  handleUserLogIn,
};
