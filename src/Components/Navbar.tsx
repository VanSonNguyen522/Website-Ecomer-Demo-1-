import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import CartCountBadge from "./CartCountBadge";
const Navbar = ({ setShowCart }:any) => {
  return <div className ="sticky top-0 bg-white z-10">
    <div className="container hidden lg:block">
        <div className="flex justify-between item-center p-8">
          {/* <h1 className ="text-4x1 font-medium">Logo</h1> */}
          <img className="relative w-[60px] h-[60px] object-cover rounded-lg" src="/logo.webp" alt="Logo"/>
          <div className="relative w-full max-w-[500px]">
            <input
              className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full" 
              type="text" 
              placeholder="Search Product..."
            />
            <FaSearch 
            className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" 
            size={20} 
            />
          </div>
          <div className="flex gap-4">
            <div className="icon__wrapper">
              <FaRegUser />
            </div>
            <div className="icon__wrapper relative cursor-pointer" onClick={() => setShowCart(true)}>
              <FaShoppingCart />
              <CartCountBadge size="w-[25px] h-[25px]"/>
            </div>
          </div>
        </div>
    </div> 
</div>
}

export default Navbar
