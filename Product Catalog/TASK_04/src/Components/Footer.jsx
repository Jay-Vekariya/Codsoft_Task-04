import React from "react";

const Footer = () => {
  return (
    <div className="lg:justify-center lg:text-center">
      <div className="lg:flex border-t-2 lg:p-4 lg:h-[200px] lg:items-center  lg:gap-4 lg:justify-between border-slate-700 text-white bg-slate-700">
        <div className="font-serif text-[30px] items-center">
          Product Catalog
        </div>
        <div>
          <ul className="lg:flex lg:gap-44 text-[20px] ">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <ul className="lg:flex lg:gap-12 text-[20px]">
            <li>Social Media</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="border-slate-700 text-white bg-slate-700">
        &copy; Copyright 2024-2025
      </div>
    </div>
  );
};

export default Footer;
