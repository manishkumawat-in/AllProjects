import { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useApiData } from "../context/SwiggyApiContext";

function Categories() {
    const { categories, isLoading, error } = useApiData();
    const [slide, setSlide] = useState(0);  

    const arrows = [
        {
            arrow: <IoIosArrowRoundBack />,
            onClickHandler: () => {
                if (categories.length - slide == 20) return false
                setSlide(slide - 4)
            }
        },
        {
            arrow: <IoIosArrowRoundForward />,
            onClickHandler: () => {
                if (categories.length - 8 == slide) return false;
                setSlide(slide + 4);
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
                <h1 className="text-[21px] font-bold">What's on your mind?</h1>
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

            <div className="flex  overflow-hidden">
                {categories.map((category, index) => (
                    <div 
                        key={index}
                        className="w-[125px] shrink-0 duration-1000" 
                        style={{ transform: `translateX(-${slide * 125}px)` }}
                    >
                        <img src={"http://localhost:5000/images/" + category.image} />
                    </div>
                ))}
            </div>

        </>
    )
}

export default Categories