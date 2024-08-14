import ProductCard from "./ProductCard";

const data = [
    {
        id:1,
        name:"Small Hamberger",
        price: "$15",
        img:"/feature_1.webp"
    },
    {
        id:2,
        name:"Fried egg rolls",
        price: "$32",
        img:"/feature_2.webp"
    },
    {
        id:3,
        name:"Sushi",
        price: "$12",
        img:"/feature_3.webp"
    },
    {
        id:4,
        name:"Fried dumplings",
        price: "$21",
        img:"/feature_4.webp"
    }
];


const FeatureSectionFood_1 = () => {
  return (
    <div className="container pt-16">
        
        <div className="lg:flex justify-between items-center">
            <div>
                <h3 className="font-medium text-3xl bold">Fast Food</h3>
                <p className="text-gray-600 mt-2">
                    Buy Fast Food online at the best price
                </p>
            </div>       

            <div className="space-x-4 mt-g lg:mt-0">
                <button className="feature-btn">Food</button>
                <button className="text-gray-600 hover:text-accent">Hamberger</button>
                <button className="text-gray-600 hover:text-accent">Bread & Bakery</button>
            </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
            <div>
                <img 
                className="w-full h-full object-cover"
                src="/feature_5.webp"
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

export default FeatureSectionFood_1