import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0d0f14] px-8 py-4 flex items-center justify-between shadow-lg border-b border-gray-800">
      <div className="flex items-center gap-3">
        <img src={LOGO_URL} className="w-10 h-10 rounded-lg shadow-md" />
        <h1 className="text-2xl font-semibold text-white tracking-wide">
          Festo
        </h1>
      </div>

      <nav>
        <ul className="flex gap-10 text-gray-300 font-medium items-center">
          <li className="flex items-center gap-2">
            {onlineStatus ? (
              <span className="flex items-center gap-2 text-green-400">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Online
              </span>
            ) : (
              <span className="flex items-center gap-2 text-red-400">
                <span className="relative flex h-3 w-3">
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                Offline
              </span>
            )}
          </li>
          <Link to="/">
            <li className="cursor-pointer hover:text-[#00eaff] transition-all duration-200">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="cursor-pointer hover:text-[#00eaff] transition-all duration-200">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="cursor-pointer hover:text-[#00eaff] transition-all duration-200">
              Contact
            </li>
          </Link>
          <Link to="/api/menu">
            <li className="cursor-pointer hover:text-[#00eaff] transition-all duration-200">
              Menu
            </li>
          </Link>
          <li className="cursor-pointer hover:text-[#00eaff] transition-all duration-200">
            Cart
          </li>
          <li>
            <button
              className="bg-gray-800 text-white font-semibold rounded-md shadow hover:bg-gray-700 active:scale-95 transition px-4 py-1"
              onClick={() => {
                btnName === "login"
                  ? setBtnName("logout")
                  : setBtnName("login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
