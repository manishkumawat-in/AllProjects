import { useState } from "react"
import { RiArrowDropDownLine } from "react-icons/ri";



function BestCuisines() {

    const Restaurants = [
        "Chinese",
        "South Indian",
        "Indian",
        "Kerala",
        "korean",
        "North Indian",
        "Seafood",
        "Bengali",
        "Punjabi",
        "Italian",
        "Andhra",
        "Biryani",
        "Japanese",
        "Arabian",
        "Fast Food",
        "Jain",
        "Gujarati",
        "Thai",
        "Pizzas",
        "Asian",
        "Cafe",
        "Continetal",
        "Mexican",
        "Mughlai",
        "Sushi",
        "Mangalorean",
        "Tibetan",
        "Barbecue",
        "Maharashtrian",
        "Nepalese",
        "Rajathani",
        "Turkish"
    ]

    const [resCount, setResCount] = useState(Restaurants.length / 2 - 1);

    const MoreResHandler = () => {
        setResCount(Restaurants.length);
        let showMoreRes = document.querySelector('#showMoreRes');
        showMoreRes.classList.add("invisible")
    }

    return (
        <div className="place-items-center mb-10">
            <div className="w-[900px]">
                <h1 className="flex ps-6 text-[24px] font-bold ">Best Cuisines Near Me</h1>
                <div className="grid grid-cols-4 mt-5 place-items-center text-[16px] font-[500]">
                    {Restaurants.map((Restaurant, index) => {
                        if (index < resCount) {
                            return (
                                <div key={index} className="border-[1px] border-gray-300 rounded-2xl w-[190px] py-3 mb-5 cursor-pointer">
                                    {Restaurant} <br /> Restaurant Near Me
                                </div>
                            )
                        }

                    })}
                    <button id="showMoreRes" type="button" onClick={MoreResHandler} className="flex items-center justify-center text-[#ff5200] font-[500] border-[1px] border-gray-300 rounded-2xl w-[190px] h-[50px] mb-5 cursor-pointer">Show More <RiArrowDropDownLine /></button>
                </div>
            </div>
        </div>
    )
}

export default BestCuisines