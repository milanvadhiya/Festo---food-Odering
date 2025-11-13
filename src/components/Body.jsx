import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constant";
import RestaturentCard from "./RestaurentCard";
import Shimmer from "./Shimmer"; // 👈 import your shimmer

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(CDN_URL);
      const json = await response.json();

      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setListOfRestaurent(restaurants);
      setFilteredRestaurent(restaurants);
    } catch (error) {
      console.log("Error fetching restaurants:", error);
    } finally {
      setLoading(false);
    }
  };

  // ⭐ Top Rated filter
  const handleTopRated = () => {
    const filtered = listOfRestaurent.filter(
      (res) => res.info.avgRating >= 4.3
    );
    setFilteredRestaurent(filtered);
  };

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="body px-4 my-6 w-full">
      {/* 🔍 Filter Section */}
      <div className="filter flex flex-wrap justify-center items-center gap-4 mb-8">
        <div className="search flex items-center gap-2">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search restaurants..."
            className="w-80 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            onClick={() => {
              const filtered = listOfRestaurent.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurent(filtered);
              
             
            }}
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
          >
            Search
          </button>
        </div>

        <button
          onClick={handleTopRated}
          className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* 🧾 Restaurant Cards */}
      <div className="card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {filteredRestaurent.length > 0 ? (
          filteredRestaurent.map((restaurent) => (
            <RestaturentCard
              key={restaurent.info.id}
              resData={restaurent.info}
            />
          ))
        ) : (
          <h2 className="col-span-full text-center text-gray-500 text-lg">
            No restaurants found 😔
          </h2>
        )}
      </div>
    </div>
  );
};

export default Body;
