import { IoMdClose } from "react-icons/io";
import CartContent from "../Cart/CartContent";


const CardDrawer = ({drawerOpen,handleDrawer}) => {



  return (
    <>
        <div className={`fixed top-0 right-0 z-50 border h-full w-3/4 sm:w-1/2 md:w-120 bg-white shadow transform transition-transform duration-300 ease-in-out flex flex-col ${drawerOpen ? "translate-x-0" : "translate-x-full"} `} >
            <div className="flex justify-end items-center p-4 border-b" >
                <button onClick={handleDrawer}>
                    <IoMdClose className="h-6 w-6 text-gray-700" />
                </button>
            </div>

            {/* Cart content for scrolable area */}

            <div className="grow p-4 overflow-y-auto ">
                <h1 className="text-xl font-semibold mb-4">Cart Items</h1>
                {/* Component for Cart Content */}
                <CartContent/>
            </div>

            <div className="p-4 sticky bottom-0 ">
                <button className="w-full border  bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">Checkout</button>
                <p className="mt-2 tracking-tight text-center text-sm text-gray-500" >
                    Shiping, taxes and discount codes calculated at checkout.
                </p>
            </div>


        </div>  
    </>
  )
}

export default CardDrawer