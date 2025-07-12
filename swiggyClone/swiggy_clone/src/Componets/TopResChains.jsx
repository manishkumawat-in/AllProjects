import { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useApiData } from "../context/SwiggyApiContext";
import Card from "./Card";

function TopResChains() {
    const { topRestaurantChains, isLoading, error } = useApiData();
    const [slide, setSlide] = useState(0);

    const arrows = [
        {
            arrow: <IoIosArrowRoundBack />,
            onClickHandler: () => {
                if (topRestaurantChains.length - slide == 10) return false
                setSlide(slide - 2)
            }
        },
        {
            arrow: <IoIosArrowRoundForward />,
            onClickHandler: () => {
                if (topRestaurantChains.length - 2 == slide) return false;
                setSlide(slide + 2);
            }
        }
    ];

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Error : {error.message}</h1>
    }

    return (
        <>
            <div className="flex justify-between my-5">
                <h1 className="text-[21px] font-bold">Top restaurant chains in Jodhapur</h1>
                <div className="flex">
                    {arrows.map((arrow, index) => (
                        <div
                            key={index}
                            className="bg-[#02060c26] rounded-full w-9 h-9 flex items-center place-content-center mx-2 cursor-pointer"
                            onClick={arrow.onClickHandler}
                        >
                            {arrow.arrow}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex overflow-hidden ">
                {topRestaurantChains.map((res, index) => (                    
                    <div 
                        key={index} 
                        style={{ transform: `translateX(-${slide * 250}px)` }}
                        className="duration-1000 shrink-0 w-[250px] mx-6 h-[] cursor-pointer"    
                    >
                        <Card props={res}/>
                    </div>
                ))}
            </div>

        </>
    )
}

export default TopResChains

