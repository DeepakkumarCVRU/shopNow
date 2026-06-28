import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { HiBars3BottomRight, HiOutlineShoppingBag } from "react-icons/hi2";
import Searchbar from "./Searchbar";
import CardDrawer from "../LayOut/CardDrawer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="container mx-auto flex justify-between items-center px-4 py-6 ">
        <div>
          <Link to="/" className="text-bold text-2xl">
            Rabbit
          </Link>
        </div>
        <div className="md:flex hidden space-x-6">
          <Link
            to="#"
            className="text-gray-700 hover:text-black font-medium upercase"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black font-medium upercase"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black font-medium upercase"
          >
            Top Bear
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black font-medium upercase"
          >
            Bottom Bear
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black ">
            <CiUser className="h-6 w-6 text-gray-700" />
          </Link>

          <button
            className="relative hover:text-black cursor-pointer "
            onClick={handleDrawer}
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -translate-1 -right-1 -top-1 px-2 py-1  bg-red-500 text-white  rounded-full w-4 h-4 flex justify-center items-center">
              4
            </span>
          </button>

          {/* <SearchBar /> */}
          <Searchbar />

          {/* Hamburger button */}
          <HiBars3BottomRight
            onClick={handleNavbar}
            className=" h-18 w-18 text-gray-700 md:hidden"
          />
        </div>
      </nav>
      <CardDrawer drawerOpen={drawerOpen} handleDrawer={handleDrawer} />

      {/* Mobile Navigation */}

      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:1/3 h-full bg-white shadow-lg transform transition-all duration-300 z-50 
                        ${navbarOpen ? "translate-x-0" : "-translate-x-full"}
            `}
      >
        <div className="flex justify-end p-4">
          <button>
            <IoMdClose
              className="h-6 w-6 md:hidden text-gray-700 flex-end"
              onClick={handleNavbar}
            />
          </button>
        </div>

        <div className="p-4 ">
            <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="flex flex-col space-y-4">
            <Link
              to="#"
              className= " block text-gray-700 hover:text-black font-medium upercase"
              onClick={handleNavbar}
            >
              Men
            </Link>
            <Link
              to="#"
              className= " block text-gray-700 hover:text-black font-medium upercase"
              onClick={handleNavbar}
            >
              Women
            </Link>
            <Link
              to="#"
              className= " block text-gray-700 hover:text-black font-medium upercase"
              onClick={handleNavbar}
            >
              Top Bear
            </Link>
            <Link
              to="#"
              className= " block text-gray-700 hover:text-black font-medium upercase"
              onClick={handleNavbar}
            >
              Bottom Bear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
