const URL = require("../models/url");
const shortid = require("shortid");

const handleCreateShortUrl = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      message: "url is required in payload",
    });
  }

  const shortUrl = shortid();

  const result = await URL.create({
    shortUrl: shortUrl,
    redirectUrl: req.body.url,
    analytics: [],
    createdBy: req.user._id,
  });

  const allUrls = await URL.find({ createdBy: req.user._id });

  return res.render("home", {
    id: shortUrl,
    urls: allUrls,
  });
  // return res.redirect("/");
};

const handleRedirectUrl = async (req, res) => {
  const result = await URL.findOneAndUpdate(
    { shortUrl: req.params.shortUrl },
    {
      $push: {
        analytics: {
          timestamp: Date.now(),
        },
      },
    }
  );
  // console.log(result);
  return res.redirect(result.redirectUrl);
};

const handleGetAnalytics = async (req, res) => {
  const result = await URL.findOne({
    shortUrl: {
      $eq: req.params.shortUrl,
    },
  });
  if (result) {
    return res.json({
      numberOfClicks: result.analytics?.length || 0,
      analytics: result.analytics,
    });
  } else {
    return res.status(404).json({
      message: `no entry found for ${shortUrl}`,
    });
  }
};

module.exports = {
  handleRedirectUrl,
  handleCreateShortUrl,
  handleGetAnalytics,
};
