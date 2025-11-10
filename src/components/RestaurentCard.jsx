const RestaturentCard = () => {
  return (
    <div className="res-card w-64 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/5/7/e4a3d9a3-9997-4b73-accc-b029abeb1cc9_83eb91d8-7d3d-4463-8e7e-9188ba95bcf7.jpg_compressed"
        alt="reaturent image"
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">Pizza Hut</h3>
        <h4 className="text-sm text-gray-500">Biryani, North Indian, Asian</h4>
        <h4 className="text-sm text-gray-600 mt-1">4.4 Stars</h4>
        <h4 className="text-sm text-gray-600">38 minutes</h4>
      </div>
    </div>
  );
};

export default RestaturentCard;