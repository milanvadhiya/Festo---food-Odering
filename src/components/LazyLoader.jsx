import { useEffect, useRef } from "react";

const LazyLoader = ({ loadMore }) => {
  const loaderRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // add slight delay to avoid rapid refetching
          const timeout = setTimeout(() => loadMore(), 400);
          return () => clearTimeout(timeout);
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0.2,
      }
    );

    const current = loaderRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
      observer.disconnect();
    };
  }, [loadMore]);

  return <div ref={loaderRef} className="h-12"></div>;
};

export default LazyLoader;
