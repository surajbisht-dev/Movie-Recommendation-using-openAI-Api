import { useState } from "react";
import RecommendationForm from "./components/RecommendationForm";
import RecommendationList from "./components/RecommendationList";

function App() {
  const [movies, setMovies] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-center text-2xl font-bold pt-6">
        Movie Recommendation App
      </h1>
      <RecommendationForm setMovies={setMovies} />
      <RecommendationList movies={movies} />
    </div>
  );
}

export default App;
