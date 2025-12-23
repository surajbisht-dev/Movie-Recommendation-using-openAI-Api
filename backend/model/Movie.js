const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    userInput: {
      type: String,
      required: true,
    },
    recommendedMovies: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);
