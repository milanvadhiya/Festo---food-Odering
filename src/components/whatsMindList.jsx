// import React from "react";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import RestaturentCard from "./RestaurentCard";

// const WhatsMindList = () => {
//   const { collectionId } = useParams();
//   console.log("whatsmind id", collectionId);
//   const [topList, setTopList] = useState([]);

//   const fetchData = async () => {
//     const response = await fetch(
//       `https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&collection=${collectionId}`
//     );
//     const json = await response.json();
//     setTopList(json?.data?.cards || []);
//     console.log("whatsmindlist data", json?.data?.cards || []);
//   };

//   useEffect(() => {
//     if(collectionId) fetchData();
//   }, [collectionId]);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>whatsMindList</h1>

//       <div style={{ marginBottom: "25px" }}>
//         {/* Title big */}
//         <h1
//           style={{ fontSize: "32px", fontWeight: "700", marginBottom: "8px" }}
//         >
//           {topList[0]?.card?.card?.title}
//         </h1>

//         {/* Description small */}
//         <p style={{ fontSize: "16px", color: "#555" }}>
//           {topList[0]?.card?.card?.description}
//         </p>
//       </div>

//       {/* Restaurant Cards */}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//         {topList
//           .filter(
//             (item) =>
//               item?.card?.card?.["@type"] ===
//               "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
//           )
//           .map((restaurant) => (
//             <RestaturentCard
//               key={restaurant?.card?.card?.info?.id}
//               resData={restaurant?.card?.card?.info}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default WhatsMindList;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaturentCard from "./RestaurentCard";

const WhatsMindList = () => {
  const { collectionId } = useParams();
  const [topList, setTopList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    if (!collectionId) return;

    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&collection=${collectionId}&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
      );
      const json = await response.json();
      console.log("whatsmindlist data", json?.data?.cards || []);
      setTopList(json?.data?.cards || []);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (collectionId) fetchData();
  }, [collectionId]);

  if (!collectionId) return <p>Loading collection...</p>;
  if (!topList.length) return <p>No data available.</p>;

  const headerCard = topList.find(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead"
  );

  const restaurantCards = topList.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>WhatsMindList</h1>

      {headerCard && (
        <div style={{ marginBottom: "25px" }}>
          <h1
            style={{ fontSize: "32px", fontWeight: "700", marginBottom: "8px" }}
          >
            {headerCard?.card?.card?.title}
          </h1>
          <p style={{ fontSize: "16px", color: "#555" }}>
            {headerCard?.card?.card?.description}
          </p>
        </div>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {restaurantCards.map((restaurant) => (
          <RestaturentCard
            key={restaurant?.card?.card?.info?.id}
            resData={restaurant?.card?.card?.info}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatsMindList;
