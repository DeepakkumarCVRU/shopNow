import {Link} from "react-router-dom"
import { CiUser } from "react-icons/ci";
import { HiBars3BottomRight, HiOutlineShoppingBag } from "react-icons/hi2";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <>
        <nav className='container mx-auto flex justify-between items-center px-4 py-6 '>
            <div>
                <Link to="/" className="text-bold text-2xl">Rabbit</Link>
            </div>
            <div className="md:flex hidden space-x-6">
                <Link to="#" className="text-gray-700 hover:text-black font-medium upercase">Men</Link>
                <Link to="#" className="text-gray-700 hover:text-black font-medium upercase">Women</Link>
                <Link to="#" className="text-gray-700 hover:text-black font-medium upercase">Top Bear</Link>
                <Link to="#" className="text-gray-700 hover:text-black font-medium upercase">Bottom Bear</Link>
            </div>
            <div className="flex items-center space-x-4">
                <Link to="/profile" className="hover:text-black " >
                <CiUser className="h-6 w-6 text-gray-700" />
                </Link>

                <button className="relative hover:text-black ">
                <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
                <span className="absolute -translate-1 -right-1 -top-1 px-2 py-1  bg-red-500 text-white  rounded-full w-4 h-4 flex justify-center items-center">
                    4
                </span>
                </button>

                {/* <SearchBar /> */}
                    <Searchbar/>

                {/* Hamburger button */}
                <HiBars3BottomRight className="h-6 w-6 tex-gray-700 md:hidden" />
            </div>
        </nav>
    </>
  )
}

export default Navbar