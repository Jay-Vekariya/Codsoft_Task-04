import React from "react";
import { NavLink } from "react-router-dom";
import { UseAuth } from "./ContextPage";

const Navbar = () => {
  const { isNotification, searchCard } = UseAuth();

  return (
    <div className="lg:flex border bg-transparent bg-gradient-to-r from-purple-600 via-amber-300 to-red-500 filter:blur-[20px] lg:fixed lg:z-1 lg:w-[97%] lg:h-[60px] lg:m-8 lg:rounded-md items-center lg:p-3 lg:gap-48 border-black">
      <div className="text-center font-serif lg:text-[25px] lg:pl-8 font-semibold">
        Product Catalog
      </div>
      <div className="">
        <ul className="lg:flex lg:gap-28 text-[20px] items-center">
          <li>
            <button className="font-serif font-bold">
              <NavLink to="/">Home</NavLink>
            </button>
          </li>
          <li>
            <input
              type="text"
              placeholder="Search here.."
              onChange={(e) => searchCard(e.target.value)}
              className="duration-400 w-28 rounded-lg bg-gradient-to-r from-purple-600 to-red-500 font-serif font-bold py-1 text-center text-black transition-all focus:outline-none focus:ring focus:ring-blue-600 sm:w-64  "
            />
          </li>
          <li className="font-serif font-bold">
            <select
              onChange={(e) => searchCard(e.target.value)}
              className="bg-gradient-to-r from-purple-600 to-red-500 p-1.5 rounded-md"
            >
              <option>Sort by</option>
              <option>MEN'S CLOTHING</option>
              <option>WOMEN'S CLOTHING</option>
              <option>ELECTRONICS</option>
              <option>JEWELERY</option>
            </select>
          </li>
          <li>
            <button className="lg:pr-6  ">
              <NavLink to="/addtocard">
                &#128722;
                {isNotification > 0 ? (
                  <sup className="rounded-full bg-yellow-700 p-1 text-sm text-white">
                    {isNotification}
                  </sup>
                ) : (
                  ""
                )}
              </NavLink>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
