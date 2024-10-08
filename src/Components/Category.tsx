const data = [
    {
        id:0,
        name:"Kabra",
        count:"10",
        img:"/product_1.webp"
    },
    {
        id:1,
        name:"Combo Humberger",
        count:"10",
        img:"/product_2.webp"
    },
    {
        id:2,
        name:"Big Hamberger",
        count:"10",
        img:"/product_3.webp"
    },
    {
        id:3,
        name:"Chicken",
        count:"10",
        img:"/product_4.webp"
    },
    {
        id:4,
        name:"Strawberry",
        count:"10",
        img:"/product_5.webp"
    },
    {
        id:18,
        name:"Chicken and vegetable rice",
        count:"10",
        img:"/product_6.webp"
    },
    {
        id:5,
        name:"Japanese noodles",
        count:"10",
        img:"/product_8.webp"
    },
    {
        id:6,
        name:"French donuts",
        count:"10",
        img:"/product_9.webp"
    },
    {
        id:7,
        name:"Beefsteak",
        count:"",
        img:"/product_10.webp"
    },
    
    // {
    //     id:10,
    //     name:"Sushi",
    //     count:"10",
    //     img:"/public/ig-16.webp"
    // },
    // {
    //     id:11,
    //     name:"Egg fried rice",
    //     count:"10",
    //     img:"/public/ig-17.webp"
    // },
    // {
    //     id:12,
    //     name:"Sweet and sour noodles",
    //     count:"10",
    //     img:"/public/ig-19.webp"
    // },
    // {
    //     id:13,
    //     name:"Banana ice cream",
    //     count:"10",
    //     img:"/public/ig-20.webp"
    // },
    // {
    //     id:14,
    //     name:"Dumplings steamed with onions",
    //     count:"10",
    //     img:"/public/ig-21.webp"
    // },
    // {
    //     id:15,
    //     name:"Crispy fried shrimp pasta",
    //     count:"10",
    //     img:"/public/ig-22.webp"
    // },
    // {
    //     id:16,
    //     name:"Crispy fried dumplings",
    //     count:"10",
    //     img:"/public/ig-23.webp"
    // },
    // {
    //     id:17,
    //     name:"Chinese braised pork rice",
    //     count:"10",
    //     img:"/public/ig-24.webp"
    // }
]
import CategoryCard from "./CategoryCard"
const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((el) => (
            <CategoryCard
                key= {el.id}
                img = {el.img}
                name = {el.name}
                count = {el.count}
            />
        ))}
      </div>
    </div>
  )
}

export default Category
