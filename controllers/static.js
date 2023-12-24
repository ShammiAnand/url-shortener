const URL = require("../models/url");

const handleHome = async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
};

module.exports = {
  handleHome,
};
