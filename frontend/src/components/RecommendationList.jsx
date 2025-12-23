const RecommendationList = ({ movies }) => {
  if (!movies) return null;

  return (
    <div className="max-w-md mx-auto mt-6 bg-gray-100 p-4 rounded">
      <h2 className="font-bold mb-2">Recommended Movies</h2>
      <pre className="text-sm whitespace-pre-wrap">{movies}</pre>
    </div>
  );
};

export default RecommendationList;
