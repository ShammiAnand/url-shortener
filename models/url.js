const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortUrl: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    analytics: [
      {
        timestamp: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

const URL = mongoose.model("urls", urlSchema);

module.exports = URL;