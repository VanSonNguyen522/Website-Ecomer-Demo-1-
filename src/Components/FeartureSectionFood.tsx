

const FeartureSectionFood = () => {
  return (
    <div className="container pt-16">
        
        <div className="lg:flex justify-between items-center">
            <div>
                <h3 className="font-medium text-2xl">Food and vegetables</h3>
                <p className="text-gray-600 mt-2">
                    Buy Food and Vegetables online at the best price
                </p>
            </div>       

            <div className="space-x-4 mt-g lg:mt-0">
                <button className="feature-btn">Food</button>
                <button className="text-gray-600 hover:text-accent">Vegetable</button>
                <button className="text-gray-600 hover:text-accent">Bread & Bakery</button>
            </div>
        </div>
        <div className="grid sm:grid-cols md:grid-cols-2 lg:grid-cols-3 pt-8 gap-2"></div>
    </div>
  )
}

export default FeartureSectionFood
