// import React, { useEffect, useRef, useState } from "react";
// import { createRoot } from "react-dom/client";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import Footer from "./components/Fotter";
// import "../index.css";

// function AppLayout() {
//   const scrollRef = useRef(null);
//   const locoScroll = useRef(null);
//   const [contentLoaded, setContentLoaded] = useState(false);

//   useEffect(() => {
//     locoScroll.current = new LocomotiveScroll({
//       el: scrollRef.current,
//       smooth: true,
//       smartphone: { smooth: true },
//       tablet: { smooth: true },
//     });

//     window.addEventListener("resize", () => locoScroll.current.update());

//     return () => {
//       locoScroll.current.destroy();
//       window.removeEventListener("resize", () => locoScroll.current.update());
//     };
//   }, []);

//   // Update scroll after content loads
//   useEffect(() => {
//     if (contentLoaded && locoScroll.current) {
//       locoScroll.current.update();
//     }
//   }, [contentLoaded]);

//   return (
//     <div ref={scrollRef} data-scroll-container className="app-container w-full">
//       <Header className="sticky top-0 z-50" />

//       <main className="content-container pt-[80px]" data-scroll-section>
//         <Body setContentLoaded={setContentLoaded} />
//       </main>

//       <Footer data-scroll-section />
//     </div>
//   );
// }

// const root = createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Fotter";
import "../index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import ResturentMenuPage from "./components/ResturentMenuPage";
import WhatsMindList from "./components/whatsMindList";
import Menu from "./components/Menu";

function AppLayout() {
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    locoScroll.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    const handleResize = () => locoScroll.current.update();
    window.addEventListener("resize", handleResize);

    return () => {
      locoScroll.current.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Update scroll after body content loads
  useEffect(() => {
    if (contentLoaded && locoScroll.current) {
      locoScroll.current.update();
    }
  }, [contentLoaded]);

  return (
    <div ref={scrollRef} data-scroll-container className="app-container w-full">
      {/* Sticky Header */}
      <Header className="sticky top-0 z-50" />

      {/* Main content */}
      <main
        className="content-container pt-[80px] flex justify-center"
        data-scroll-section
      >
        <Outlet context={{ setContentLoaded }} />
      </main>

      {/* Footer */}
      <Footer data-scroll-section />
    </div>
  );
}

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/api/menu",
          element: <Menu />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/restaurant/:resId",
          element: <ResturentMenuPage />,
        },
        {
          path: "/mind/:collectionId",
          element: <WhatsMindList />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
