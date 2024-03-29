import React from "react";
import img from "../../Asset/images/Group 2.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import Footer from '../Footer/Footer'

const NavLinks = ({ path }) => {
  const { pathname } = useLocation();
  if (pathname === "/contact") return null;
  if (pathname === "/signup") return null;
  if (pathname === "/login") return null;

  return (
    <nav className="mx-auto max-w-7xl ">
      <div className="flex justify-between  pt-7 items-center">
        <div>
          <img src={img} alt="" />
        </div>

        <div className="flex gap-x-[10rem]">
          <ul className="flex text-[#666666] font-normal whitespace-nowrap mr-9">
            <li className="mx-4">
              <Link
                to="/"
                className="text-base hover:text-[#EC522E] duration-500 "
              >
                Home
              </Link>
            </li>
            <li className="mx-4">
              <Link
                to="/listing"
                className="text-base hover:text-[#EC522E] duration-500"
              >
                Listing
              </Link>
            </li>
            <li className="mx-4">
              <Link
                to="/gallery"
                className="text-base hover:text-[#EC522E] duration-500"
              >
                Gallery
              </Link>
            </li>
            <li className="mx-4">
              <Link
                to="/about"
                className="text-base hover:text-[#EC522E] duration-500 whitespace-nowrap"
              >
                About Us
              </Link>
            </li>
            <li className="mx-4">
              <Link
                to="/contact"
                className="text-base hover:text-[#EC522E] duration-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="z-30">
          <Link to="/login">
            <button className="text-sm  font-semibold rounded-[9px] hover:text-[black] w-28 h-12 text-[#fff] border-2 border-[#fff] bg-[#666666]">
              LOG IN
            </button>
          </Link>

          <Link
            to="signup
          "
          >
            <button className="text-sm ml-2 font-semibold rounded-[9px] hover:text-[black] w-28 h-12 text-[#fff] border-2 border-[#EC522E] bg-[#EC522E]">
              SIGN UP
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavLinks;
