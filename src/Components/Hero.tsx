import {BsArrowRight } from "react-icons/bs"
const Hero = () => {
  return (
    <div className="container">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
            <img className="w-full h-[580px] object-cover rounded-lg" 
            src="/ig-7.webp" 
            alt="food image"/>
        
        <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
            <p className="text-2xl hidden sm:block">100% Original Dry Fruits</p>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
                Dried Fruit Best Healthy
            </h2>
            <p className="text-blue-600 text-2xl pt-4 sm:pt-8 font-bold">Starting At</p>
            <div className="font-medium black-600 text-2xl sm:text-4xl pd-4 sm:pd-8">
                $18.36
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
                Show Now <BsArrowRight/>
            </div>
          </div>
        </div>
      <div className="relative">
        <img
          className="h-full w-full object-cover rounded-lg" 
          src="/ig-18.webp"
          alt="Food- image"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl text-white sm:text-3xl font-bold">Best Healthy Food</h2>
            <p className="font-bold text-yellow-100 text-xl pt-4">Starting At</p>
            <div className="font-medium text-white text-2xl sm:text-3xl pb-8">11$</div>
            <div className="bg-accent hover:bg-accentDark text-white rounded-full w-fit flew items-center gap-4 px-4 py-2 text-[10px] cursor-pointer">Shop Now <BsArrowRight/></div>
          </div>
      </div>
      <div className="relative">
        <img
          className="h-full w-full object-cover rounded-lg" 
          src="/ig-11.webp"
          alt="Food- image"
          />
        <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl text-gray-950 sm:text-3xl font-bold">Best Healthy Food</h2>
            <p className="font-bold text-black text-xl pt-4">Starting At</p>
            <div className="font-medium text-red-500 text-2xl sm:text-3xl pb-8">11$</div>
            <div className="bg-accent hover:bg-accentDark text-white rounded-full w-fit flew items-center gap-4 px-4 py-2 text-[10px] cursor-pointer">Shop Now <BsArrowRight/></div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Hero
