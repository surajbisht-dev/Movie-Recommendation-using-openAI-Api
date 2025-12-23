const Movie = require("../model/Movie");
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.getRecommendations = async (req, res) => {
  try {
    const { userInput } = req.body;

    if (!userInput) {
      return res.status(400).json({ message: "userInput is required" });
    }

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: `Suggest 3 to 5 movies based on this preference: ${userInput}`,
    });

    const movies = response.output_text;

    await Movie.create({
      userInput,
      recommendedMovies: movies,
    });

    res.status(200).json({ movies });
  } catch (error) {
    console.error("OPENAI ERROR:", error);
    res.status(500).json({
      message: "Failed to get recommendations",
      error: error.message,
    });
  }
};
