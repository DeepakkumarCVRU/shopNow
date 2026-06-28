import { RiInstagramFill, RiMetaLine, RiTwitterXFill } from "react-icons/ri"
import { FiPhoneCall } from "react-icons/fi";

const Footers = () => {

    // TODO -> Add css for footer 

  return (
    <>  
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-12 px-8">
                <div>
                    <h1>NewsLatter</h1>
                    <p>Be the first to hear about our new products , excluxive event and Online offers</p>
                    <p>Sing Up and get 10% off your first order</p>
                    <div>
                        <input type="text" />
                        <button>Subscribe</button>
                    </div>  
                </div>
                <div>
                    <h1>Shop</h1>
                    <p>Men's top bear</p>
                    <p>Women's top bear</p>
                    <p>Men's bottom bear</p>
                    <p>Women's bottom bear</p>
                </div>

                <div>
                    <h1>support</h1>
                    <p>Contact Us</p>
                    <p>About Us</p>
                    <p>FAQ's</p>
                    <p>Features</p>
                </div>

                <div>
                    <h1>follow us</h1>
                    <ul className="flex">
                        <li>
                            <RiMetaLine/>
                        </li>
                        <li>
                            <RiInstagramFill/>
                        </li>
                        <li>
                            <RiTwitterXFill/>
                        </li>
                    </ul>
                    <div>
                        <p>Call us</p>
                        <ul>
                            <li >
                                <FiPhoneCall className="inline-block mr-2" />
                                7858926474
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Footers