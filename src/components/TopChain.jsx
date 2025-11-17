import React from "react";
import { RESIMG_CDN } from "../utils/constant";

export default function TopChain(props) {
  const { chainInfo } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    aggregatedDiscountInfoV3,
  } = chainInfo.info;

  return (
    <div className="w-56 h-[300px] rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg cursor-pointer transition-all relative flex flex-col">
      {/* IMAGE */}
      <div className="h-40 relative overflow-hidden">
        <img
          src={RESIMG_CDN + cloudinaryImageId}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />

        {/* Bottom offer badge */}
        {aggregatedDiscountInfoV3 && (
          <div className="absolute bottom-0 left-0 w-full bg-black/80 text-white px-3 py-2 flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            <span className="text-sm md:text-base font-bold truncate text-center">
              {aggregatedDiscountInfoV3.header}
              {aggregatedDiscountInfoV3.subHeader}
            </span>
          </div>
        )}
      </div>

      {/* DETAILS */}
      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="font-semibold text-lg text-gray-900">{name}</h2>
          <p className="text-sm text-gray-600 leading-tight line-clamp-2">
            {cuisines.join(", ")}
          </p>
        </div>

        {/* Rating + Time */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-sm font-semibold bg-green-600 text-white px-2 py-0.5 rounded-md">
            ⭐ {avgRating}
          </span>

          <span className="text-sm text-gray-700">
            {sla?.deliveryTime} mins
          </span>
        </div>
      </div>
    </div>
  );
}
