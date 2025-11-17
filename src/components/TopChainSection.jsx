import React, { useRef } from "react";
import TopChain from "./TopChain";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../../index.css"; // Ensure this contains .topchain-scroll styles

export default function TopChainSection({ chainData }) {
  const scrollRef = useRef();

  const scrollNext = () =>
    scrollRef.current.scrollBy({ left: 280, behavior: "smooth" });
  const scrollPrev = () =>
    scrollRef.current.scrollBy({ left: -280, behavior: "smooth" });

  return (
    <div className="topchain-wrapper relative py-6 px-4">
      {/* Header with title and buttons */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="title text-2xl font-bold">
          Top restaurant chains in Ahmedabad
        </h1>

        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-200 transition"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={scrollNext}
            className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-200 transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        className="topchain-scroll flex gap-4 overflow-x-auto scroll-smooth pb-4"
        ref={scrollRef}
      >
        {chainData.map((rest) => (
          <div key={rest.info.id} style={{ flex: "0 0 auto" }}>
            <TopChain chainInfo={rest} />
          </div>
        ))}
      </div>
    </div>
  );
}
