const URL = require("../models/url");
const { getUserWithId } = require("../services/auth");

const handleHome = async (req, res) => {
  const uid = req.cookies?.uid;
  if (!uid) {
    console.log("no uid");
    return res.redirect("/login");
  }

  const user = getUserWithId(uid);
  if (!user) {
    console.log("no user");
    return res.redirect("/login");
  }
  const allUrl = await URL.find({ createdBy: user._id });
  return res.render("home", {
    urls: allUrl,
  });
};

module.exports = {
  handleHome,
};
