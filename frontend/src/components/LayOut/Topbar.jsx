import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-red-400 text-white" >
        <div className=" container mx-auto flex justify-between items-center py-3 px-4 ">
          <div className=" hidden md:flex items-center space-x-4">
            <a href="" className="hover:text-gray-300">
              <TbBrandMeta className="h-5 w-5" />
            </a>
            <a href="" className="hover:text-gray-300">
              <IoLogoInstagram className="h-5 w-5" />
            </a>
            <a href="" className="hover:text-gray-300">
              <RiTwitterXLine className="h-5 w-5" />
            </a>
          </div>

          <div className=" text-sm text-center grow md:non" >
            <h1>We Ship worldwide - fast and Relaible Shopping</h1>
          </div>
          <div className="hidden md:flex ">
            <a href="+91 7858926474" >+91: 7858926474</a>
          </div>
        </div>
    </div>
  )
}

export default Topbar