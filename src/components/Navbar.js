import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  return (
    <div className="absolute w-full flex justify-between items-center p-4 ">
      <h1 className="font-bold text-white text-2xl z-20 ">Experiences</h1>
      <HiMenuAlt3
        onClick={handleNav}
        size={25}
        className="cursor-pointer z-20 text-white"
      />
      <div
        className={
          nav
            ? "ease-in duration-300 fixed left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10 text-gray-300 "
            : "absolute top-0 left-[-100%] h-screen ease-in duration-500 z-10"
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          <li className="font-bold text-3xl p-8">Home</li>
          <li className="font-bold text-3xl p-8">Destinations</li>
          <li className="font-bold text-3xl p-8">Reservations</li>
          <li className="font-bold text-3xl p-8">Amenities</li>
          <li className="font-bold text-3xl p-8">Rooms</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
