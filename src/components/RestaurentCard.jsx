import { CDN_URL, RESIMG_CDN } from "../utils/constant";
const RestaturentCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData;
  return (
    <div className="res-card w-64 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
      <img
        src={RESIMG_CDN+cloudinaryImageId}
        alt="reaturent image"
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        name,
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
        <h4 className="text-sm text-gray-500">{cuisines.join(",")}</h4>
        <h4 className="text-sm text-gray-600 mt-1">{avgRating}</h4>
        <h4 className="text-sm text-gray-600">{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default RestaturentCard;
