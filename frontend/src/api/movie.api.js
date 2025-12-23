import axios from "axios";

export const getRecommendations = (input) => {
  return axios.post("http://localhost:5000/api/recommend", {
    userInput: input,
  });
};
