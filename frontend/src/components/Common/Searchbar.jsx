import { useState } from "react"
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2"


const Searchbar = () => {
    const [searchTearm , setSearchTearm] = useState('')
    const [isOpen , setOpen ] = useState(false)

    const handleSearch = ()=>{
        setOpen(!isOpen)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(searchTearm)
        setSearchTearm("")
        setOpen(false)
    }

  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? "absolute  top-0 right-0 left-0 w-full bg-white h-26 z-40":"w-auto"}`}>
    {isOpen? (
        <form onSubmit={handleSubmit} className="flex items-center justify-center w-full">
            <div className="relative w-1/2">
                <input 
                    type="text"
                    value={searchTearm}
                    placeholder="Search..."
                    className="bg-gray-400 px-4 py-2 pl-2 pr-12 focus:outline-none w-full placeholder:text-gray-700 "
                    onChange={(e)=>setSearchTearm(e.target.value)}
                 />
            {/* search Icon */}
            <button className= " absolute -translate-x-7 translate-y-1  " type="submit">
                <HiMagnifyingGlass className="h-6 w-6 text-gray-700 cursor-pointer" />
            </button>
            </div>

            <button onClick={handleSearch} className="absolute right-4 ">
                <HiMiniXMark className="h-6 w-6 text-gray-700 cursor-pointer" />
            </button>

        </form>
    ) : (
        <button onClick={handleSearch}>
            <HiMagnifyingGlass className="h-6 w-6 text-gray-700 cursor-pointer"  />
        </button>
    )}  
    </div>
  )
}

export default Searchbar