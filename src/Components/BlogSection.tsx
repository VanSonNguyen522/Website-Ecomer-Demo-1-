import BlogCard from "./BlogCard";

const data = [
    {
        img: "Blog_1.webp",
        title :"Healthy Food Healthy Life",
        date: "Aug 27,2023",
        comment: 90
    },
    {
        img: "Blog_2.webp",
        title: "The Benefits of a Balanced Diet",
        date: "Sep 10, 2023",
        comment: 45
    },
    {
        img: "blog_3.webp",
        title: "Top 10 Superfoods for Your Daily Routine",
        date: "Oct 5, 2023",
        comment: 120
    },
    // {
    //     img: "post_4.webp",
    //     title: "How to Start Your Day with a Healthy Breakfast",
    //     date: "Oct 20, 2023",
    //     comment: 75
    // }
]

const BlogSection = () => {
    return (
        <div className="container pt-16">
            <h2 className="font-bold text-2xl">Lastest New</h2>
            <p className="text-gray-500">Present posts in a best way to hightlight interesting moment of your blog.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
                {data.map((el) => (
                    <BlogCard
                        key={el.date}
                        img={el.img}
                        date={el.date}
                        title={el.title}
                        comment={el.comment}
                    />
                ))}
            </div>
        </div>
    )
}

export default BlogSection
