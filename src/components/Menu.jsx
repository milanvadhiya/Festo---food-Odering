import React from "react";
import { useEffect } from "react";

const Menu = () => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=47589&catalog_qa=undefined&submitAction=ENTER",
          {
            headers: {
              Accept: "application/json",
              "User-Agent": "Mozilla/5.0",
              // add any required cookies or auth tokens here
            },
          }
        );

        // Check response status
        if (!response.ok) {
          console.error("HTTP error", response.status);
          return;
        }

        const text = await response.text(); // Read as text first
        console.log("Raw response:", text);

        // Try to parse JSON safely
        const json = text ? JSON.parse(text) : {};
        console.log("Parsed JSON:", json);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

//   useEffect(() => {
//     const fetchMenu = async () => {
//       const response = await fetch("http://localhost:4000/api/menu");
//       const data = await response.json();
//       console.log("Menu data:", data);
//     };

//     fetchMenu();
//   }, []);

  return <div>Menu</div>;
};

export default Menu;
