import React, { useEffect } from "react";
import { CDN_URL, MENU_API_URL } from "../utils/constant";
import { useParams } from "react-router-dom";

const ResturentMenuPage = () => {
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=47589&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await response.json();
      console.log("daata", json);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <h1>Name of resturent</h1>
      <h2>menu</h2>
      <ul>
        <li>biriyani</li>
        <li>Bhajiya</li>
        <li>mango</li>
      </ul>
    </div>
  );
};

export default ResturentMenuPage;
