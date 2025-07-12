import { RiArrowDropDownLine } from "react-icons/ri";

function NearRestaurants() {

    const nearRes = ["Explore", "Explore Top Rated"];

    return (
        <div className="place-items-center mb-10">
            <div className="w-[900px]">
                <h1 className="flex ps-6 text-[24px] font-bold ">Explore Every Restaurants Near Me</h1>
                <div className="grid grid-cols-4 mt-5 place-items-center text-[16px] font-[500]">
                    {nearRes.map((Restaurant, index) => (                        
                            <div key={index} className="border-[1px] border-gray-300 rounded-2xl w-[190px] py-3 mb-5 cursor-pointer">
                                {Restaurant} <br /> Restaurant Near Me
                            </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NearRestaurants