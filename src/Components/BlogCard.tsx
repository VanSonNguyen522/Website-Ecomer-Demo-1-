interface prosType {
    img: string;
    title: string;
    comment: number;
    date: string;
}

const BlogCard: React.FC<prosType> = ({img, title, comment, date}) =>{
    return (
        <div className="space-y-4">
            <div className="flex justify-between">
            <img
                className="w-[440px] h-[300px] rouned-lg hover:scale:110 transition-transform"
                src = {img}
                alt = "post"
            />
            </div>
            <div className="flex justify-between text-accent font-medium">
                <span>{date} </span>
                <span className="text-red-600">{comment} comments</span>
            </div>
            <h3 className="font-bold text-xl">{title}</h3>
        </div>
    );
};

export default BlogCard