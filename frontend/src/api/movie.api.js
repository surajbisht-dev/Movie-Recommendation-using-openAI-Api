import axios from "axios";

export const getRecommendations = (input) => {
  return axios.post(
    "https://movie-recommendation-using-openai-api.onrender.com/api/recommend",
    { userInput: input }
  );
};
