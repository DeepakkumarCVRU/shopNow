import Topbar from "../LayOut/Topbar"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <div className="border-b border-gray-200">
        {/* Topbar */}
        <Topbar/>
        {/* Navbar */}
        <Navbar/>
        {/* Card Drawer */}
    </div>
  )
}

export default Header