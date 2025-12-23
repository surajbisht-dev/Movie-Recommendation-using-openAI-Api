import { useState } from "react";
import { getRecommendations } from "../api/movie.api";

const RecommendationForm = ({ setMovies }) => {
  const [input, setInput] = useState("");

  const submitHandler = async () => {
    const res = await getRecommendations(input);
    setMovies(res.data.movies);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <input
        className="w-full border p-2 rounded"
        placeholder="Enter movie preference"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={submitHandler}
        className="w-full bg-black text-white p-2 mt-4 rounded"
      >
        Get Recommendations
      </button>
    </div>
  );
};

export default RecommendationForm;
