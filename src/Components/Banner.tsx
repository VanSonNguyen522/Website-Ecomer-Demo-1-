const Banner = () =>{
    return (
        <div className="container pt-16">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
                <div className="overflow-hidden rounded-lg">
                    <img
                        className="w-[640px] h-[320px] hover:scale-110 transition-transform"
                        src="/banner_1.webp"
                        alt="banner_1"
                    />
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img
                        className="w-[640px] h-[320px] hover:scale-110 transition-transform"
                        src ="banner_2.webp"
                        alt="banner_2"
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner