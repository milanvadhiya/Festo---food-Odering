const Shimmer = () => {
  return (
    <div className="flex flex-col items-center px-4 my-6 w-full">
      {/* 🔸 Top bar shimmer (Search + Button) */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 w-full max-w-screen-lg">
        <div className="w-full sm:w-96 h-10 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="w-28 h-10 bg-gray-300 rounded-full animate-pulse"></div>
      </div>

      {/* 🔸 Restaurant cards shimmer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-2xl">
        {Array(8)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-sm overflow-hidden animate-pulse"
            >
              {/* Image placeholder */}
              <div className="w-full h-36 bg-gray-300"></div>

              {/* Text placeholders */}
              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                <div className="flex justify-between mt-3">
                  <div className="h-4 bg-gray-300 rounded w-12"></div>
                  <div className="h-4 bg-gray-300 rounded w-16"></div>
                </div>
                <div className="h-3 bg-gray-300 rounded w-20 mt-2"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
