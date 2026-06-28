import { RiDeleteBin4Line } from "react-icons/ri";

const CartContent = () => {

    const cartProduct = [
        {
            id:1,
            name:"T-shirt",
            size:"L",
            color:"red",
            quantity:5,
            price:15,
            image:"https://picsum.photos/200?random=1"
        },
        {
            id:2,
            name:"Jacket",
            size:"L",
            color:"blue",
            quantity:10,
            price:25,
            image:"https://picsum.photos/200?random=2"
        },
        {
            id:1,
            name:"Jeans",
            size:"L",
            color:"black",
            quantity:28,
            price:25,
            image:"https://picsum.photos/200?random=3"
        },
    ]


  return (
    <>
      {
        cartProduct.map((product ,index)=>(
            <div 
                key={index}
                className="flex items-start border-b border-gray-200 py-4"
            >
                <div  className="flex items-start ">
                    <img src={product.image} alt={product.name} className="w-20 h-24 object-cover mr-4 rounded" />

                    <div>
                        <p className="font-semibold">{product.name}</p>
                        <p className="text-sm text-gray-500" >Size: {product.size} | Color: {product.color}</p>
                        <div className="flex  items-center mt-2">
                            <button className="border rounded px-2 py-1 text-xl font-medium" >-</button>
                            <span className="mx-4">{product.quantity}</span>
                            <button className="border rounded px-2 py-1 text-xl font-medium" >+</button>
                        </div>
                    </div>


                </div>

                <div className="ml-auto flex flex-col justify-between items-center space-y-10">
                    <p className="font-semibold ">${product.price}</p>
                    <button className="">
                        <RiDeleteBin4Line className="h-6 w-6  text-red-900 cursor-pointer"/>
                    </button>
                </div>

            </div>
        ))
      }  
    </>
  )
}

export default CartContent