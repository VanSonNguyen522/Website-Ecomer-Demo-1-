import {BsSearch } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import {AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "./CartCountBadge";

const MobNavbar = ({setShowCart}:any) => {
    return (
    <div className="sticky top-0 bg-white z-10">
        <div className="container p-8 lg:hidden">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <IoMenu size={30} />
                    <BsSearch size={24} />
                </div>
                <h1 className="text-4x1">Logo</h1>

                <div className="flex gap-4 text-[30px]">
                    <AiOutlineUser/>
                    <div className="relative cursor-pointer" onClick={() => setShowCart(true)}>
                        <AiOutlineShoppingCart />
                        <CartCountBadge size="w-[20px] h-[20px]" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MobNavbar;