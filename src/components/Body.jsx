import RestaturentCard from "./RestaurentCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
      <div
        className="
    card
    grid
    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
    gap-8
    px-8               /* equal left + right padding */
    py-10              /* vertical spacing */
    mx-auto            /* centers the whole block */
    w-full             /* ensures full responsive width */
    max-w-screen-xl    /* PERFECT centered container */
  "
      >
        <RestaturentCard />
        <RestaturentCard />
        <RestaturentCard />
        <RestaturentCard />
        <RestaturentCard />
      </div>
    </div>
  );
};

export default Body;
