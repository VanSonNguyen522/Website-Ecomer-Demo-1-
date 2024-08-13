
import ProductCard from "./ProductCard";

const data = [
    {
        id:5,
        name:"Banana ice cream",
        price: "$15",
        img:"/feature_7.webp"
    },
    {
        id:7,
        name:"Dumplings steamed with onions",
        price: "$32",
        img:"/feature_8.webp"
    },
    {
        id:7,
        name:"Crispy fried shrimp pasta",
        price: "$12",
        img:"/feature_9.webp"
    },
    {
        id:8,
        name:"Crispy fried dumplings",
        price: "$21",
        img:"/feature_10.webp"
    }
];


const FeatureSectionFood_2 = () => {
  return (
    <div className="container pt-16">
        
        <div className="lg:flex justify-between items-center">
            <div>
                <h3 className="font-medium text-3xl bold">Food and vegetables</h3>
                <p className="text-gray-600 mt-2">
                    Buy Food and Vegetables online at the best price
                </p>
            </div>       

            <div className="space-x-4 mt-g lg:mt-0">
                <button className="text-gray-600 hover:feature-btn">Food</button>
                <button className="text-gray-600 hover:feature-btn">Vegetable</button>
                <button className="text-gray-600 hover:feature-btn">Bread & Bakery</button>
            </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
            <div>
                <img 
                className="w-full h-full object-cover"
                src="/feature_11.webp"
                alt="banner"
                />
            </div>
            {data.map(el => (
                <ProductCard
                    key = {el.id}
                    img = {el.img}
                    name = {el.name}
                    price = {el.price}
                />
            ))}
        </div>
    </div>
  )
}

export default FeatureSectionFood_2

