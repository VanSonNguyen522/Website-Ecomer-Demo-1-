
interface prosType {
    img: string;
    name: string;
    count: string;
}
const CategoryCard: React.FC<prosType> = ({img, name, count}) => {
  return (
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-110 transition-transform rounded-lg">
        <div className="flex justify-between items-center p-6">
            <div className="space-y-4">
                <h4 className="font-medium text-xl">{name}</h4>
                <p className="text-gray-500">{count}</p>
            </div>
            <img className="w-[140px] h-[140px]  rounded-lg" src={img} alt={name}/>
        </div>
    </div>
  )
}

export default CategoryCard
