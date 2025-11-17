import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import WhatsOnYourMind from "./WhatsOnYourMind";
import { Link } from "react-router-dom";

const WhatsOnYourMindSection = ({ WhatsOnYourMindInfo }) => {
  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState("next");

  const totalPages = Math.ceil(WhatsOnYourMindInfo.length / ITEMS_PER_PAGE);

  const next = () => {
    if (page < totalPages - 1) {
      setDirection("next");
      setPage((p) => p + 1);
    }
  };

  const prev = () => {
    if (page > 0) {
      setDirection("prev");
      setPage((p) => p - 1);
    }
  };

  const items = WhatsOnYourMindInfo.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );
  const getCollectionId = (item) => {
    const url = item?.action?.link;
    if (!url) return null;

    const params = new URL(url).searchParams;
    return params.get("collection_id");
  };

  return (
    <div className="w-full px-4 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">What's on your mind?</h2>

        {/* buttons like swiggy */}
        <div className="flex gap-3">
          <button
            onClick={prev}
            disabled={page === 0}
            className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-200 disabled:opacity-40"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            disabled={page === totalPages - 1}
            className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-200 disabled:opacity-40"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* ITEMS SECTION — EXACT SWIGGY STYLE */}
      <div className="overflow-hidden w-full">
        <div
          key={page}
          className={`
            grid grid-cols-3 md:grid-cols-6 gap-5 
            ${
              direction === "next" ? "animate-swiggyNext" : "animate-swiggyPrev"
            }
          `}
        >
          {items.map((item) => {
            const collectionId = getCollectionId(item);
            if (!collectionId) return null; // skip items without collectionId

            console.log("collectionId", collectionId);

            return (
              <Link key={collectionId} to={"mind/" + collectionId}>
                <WhatsOnYourMind resData={item} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatsOnYourMindSection;
