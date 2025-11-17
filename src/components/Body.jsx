// import { useEffect, useState } from "react";
// import { CDN_URL } from "../utils/constant";
// import RestaturentCard from "./RestaurentCard";
// import Shimmer from "./Shimmer";
// import WhatsOnYourMindSection from "./WhatsOnYourMindSection";
// import TopChainSection from "./TopChainSection";
// import BestCuisines from "./BestCuisines";
// import Footer from "./Fotter";

// const Body = () => {
//   const [listOfRestaurent, setListOfRestaurent] = useState([]);
//   const [filterResturent, setfilterResturent] = useState([]);
//   const [WhatsOnYourMindInfo, setWhatsOnYourMindInfo] = useState([]);
//   const [chainData, setchainData] = useState([]);
//   const [brandsData, setBrandsData] = useState([]);
//   const [bestPlacesData, setBestPlacesData] = useState([]);
//   const [bestres, setBestres] = useState([]);
//   const [searchText, setseachText] = useState("");

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(CDN_URL);
//       const json = await response.json();

//       setBestres(json?.data?.cards?.[8]?.card?.card?.brands || []);
//       setBestPlacesData(json?.data?.cards?.[6]?.card?.card?.brands || []);
//       setBrandsData(json?.data?.cards?.[7]?.card?.card?.brands || []);
//       setchainData(
//         json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
//           ?.restaurants || []
//       );
//       setWhatsOnYourMindInfo(
//         json?.data?.cards?.[0]?.card?.card?.imageGridCards?.info || []
//       );

//       setListOfRestaurent(
//         json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
//           ?.restaurants
//       );
//       setfilterResturent(
//         json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
//           ?.restaurants
//       );
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   if (listOfRestaurent.length === 0) {
//     return <Shimmer />;
//   }

//   return (
//     <div className="w-full pt-6 flex flex-col items-center gap-8">
//       <div className="max-w-[1250px] w-full flex flex-col gap-8">
//         {/* Search + Filters */}
//         <div className="filter flex flex-wrap justify-center items-center gap-4 mb-8">
//           <div className="search flex items-center gap-2">
//             <input
//               type="text"
//               value={searchText}
//               onChange={(e) => setseachText(e.target.value)}
//               placeholder="Search restaurants..."
//               className="w-80 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
//             />

//             <button
//               onClick={() => {
//                 const filtered = listOfRestaurent.filter((res) =>
//                   res.info.name.toLowerCase().includes(searchText.toLowerCase())
//                 );
//                 setfilterResturent(filtered);
//               }}
//               className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
//             >
//               Search
//             </button>
//           </div>

//           <button
//             onClick={() => {
//               const filteredList = listOfRestaurent.filter(
//                 (res) => res.info.avgRating > 4.3
//               );
//               setfilterResturent(filteredList);
//             }}
//             className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
//           >
//             Top Rated Restaurants
//           </button>
//         </div>

//         {/* Sections */}
//         <WhatsOnYourMindSection WhatsOnYourMindInfo={WhatsOnYourMindInfo} />
//         <TopChainSection chainData={chainData} />

//         {/* Restaurant List */}
//         <h1 className="title text-2xl font-bold">
//           Restaurants with online food delivery in Ahmedabad
//         </h1>

//         <div className="card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10 w-full">
//           {filterResturent.map((restaurent) => (
//             <RestaturentCard
//               resData={restaurent?.info}
//               key={restaurent.info.id}
//             />
//           ))}
//         </div>

//         {/* Best Cuisines */}
//         <BestCuisines brands={bestPlacesData} />
//         <BestCuisines brands={brandsData} />
//         <BestCuisines brands={bestres} />
//       </div>

//       {/* Footer aligned at bottom */}
//       <Footer />
//     </div>
//   );
// };

// export default Body;
import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constant";
import RestaturentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import WhatsOnYourMindSection from "./WhatsOnYourMindSection";
import TopChainSection from "./TopChainSection";
import BestCuisines from "./BestCuisines";
import Footer from "./Fotter";
import { useOutletContext } from "react-router-dom";
import {Link} from "react-router-dom";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filterResturent, setfilterResturent] = useState([]);
  const [WhatsOnYourMindInfo, setWhatsOnYourMindInfo] = useState([]);
  const [chainData, setchainData] = useState([]);
  const [brandsData, setBrandsData] = useState([]);
  const [bestPlacesData, setBestPlacesData] = useState([]);
  const [bestres, setBestres] = useState([]);
  const [searchText, setseachText] = useState("");
  const { setContentLoaded } = useOutletContext();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(CDN_URL);
      const json = await response.json();
      

      setBestres(json?.data?.cards?.[8]?.card?.card?.brands || []);
      setBestPlacesData(json?.data?.cards?.[6]?.card?.card?.brands || []);
      setBrandsData(json?.data?.cards?.[7]?.card?.card?.brands || []);
      setchainData(
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
      setWhatsOnYourMindInfo(
        json?.data?.cards?.[0]?.card?.card?.imageGridCards?.info || []
      );

      setListOfRestaurent(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilterResturent(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setContentLoaded(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!listOfRestaurent.length) {
    return <Shimmer />;
  }

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1250px] w-full flex flex-col gap-8">
        {/* Search + Filters */}
        <div className="filter flex flex-wrap justify-center items-center gap-4 mb-4 mt-6">
          <div className="search flex items-center gap-2">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setseachText(e.target.value)}
              placeholder="Search restaurants..."
              className="w-80 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <button
              onClick={() => {
                const filtered = listOfRestaurent.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setfilterResturent(filtered);
              }}
              className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
            >
              Search
            </button>
          </div>

          <button
            onClick={() => {
              const filteredList = listOfRestaurent.filter(
                (res) => res.info.avgRating > 4.3
              );
              setfilterResturent(filteredList);
            }}
            className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
          >
            Top Rated Restaurants
          </button>
        </div>

        {/* Sections */}
        <WhatsOnYourMindSection WhatsOnYourMindInfo={WhatsOnYourMindInfo} />
        <TopChainSection chainData={chainData} />

        {/* Restaurant List */}
        <h1 className="title text-2xl font-bold">
          Restaurants with online food delivery in Ahmedabad
        </h1>

        <div className="card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10 w-full">
          {filterResturent.map((restaurent) => (
            <Link
              key={restaurent.info.id}
              to={"/restaurant/" + restaurent.info.id}
            >
              <RestaturentCard resData={restaurent?.info} />
            </Link>
          ))}
        </div>

        {/* Best Cuisines */}
        <BestCuisines brands={bestPlacesData} />
        <BestCuisines brands={brandsData} />
        <BestCuisines brands={bestres} />
        <Footer />
      </div>
    </div>
  );
};

export default Body;
