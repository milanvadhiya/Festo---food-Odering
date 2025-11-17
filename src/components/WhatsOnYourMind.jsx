import { RESIMG_CDN } from "../utils/constant";

const WhatsOnYourMind = ({ resData }) => {
  const { imageId, action } = resData;

  return (
    <div className="flex flex-col items-center w-24 cursor-pointer select-none">
      {/* Image */}
      <img
        src={RESIMG_CDN + imageId}
        alt={action?.text}
        className="
          w-20 h-20
          rounded-full
          object-cover
          drop-shadow-sm
          transition-transform
          duration-300
          hover:scale-105
        "
      />

      {/* Title */}
      <p className="text-[13px] mt-2 font-medium text-gray-800 text-center leading-tight">
        {action?.text}
      </p>
    </div>
  );
};

export default WhatsOnYourMind;
