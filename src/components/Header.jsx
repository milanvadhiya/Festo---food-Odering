const Header = () => {
  return (
    <header className="w-full bg-[#0d0f14] px-8 py-4 flex items-center justify-between shadow-lg border-b border-gray-800">
      <div className="flex items-center gap-3">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_800,h_800/portal/m/logo_192x192.png"
          alt="Logo"
          className="w-10 h-10 rounded-lg shadow-md"
        />
        <h1 className="text-2xl font-semibold text-white tracking-wide">
          Festo
        </h1>
      </div>

      <nav>
        <ul className="flex gap-10 text-gray-300 font-medium">
          <li className="cursor-pointer hover:text-[#00eaff] transition-all duration-200">
            Home
          </li>
          <li className="cursor-pointer hover:text-[#00eaff] transition-all duration-200">
            About
          </li>
          <li className="cursor-pointer hover:text-[#00eaff] transition-all duration-200">
            Contact
          </li>
          <li className="cursor-pointer hover:text-[#00eaff] transition-all duration-200">
            Cart
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;