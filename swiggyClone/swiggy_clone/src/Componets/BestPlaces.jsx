import { useState } from "react"
import { RiArrowDropDownLine } from "react-icons/ri";


function BestPlaces() {

    
    const places = [
        "Mumbai",
        "Delhi",
        "Bengaluru",
        "Hyderabad",
        "Ahmedabad",
        "Chennai",
        "Kolkata",
        "Pune",
        "Jaipur",
        "Surat",
        "Lucknow",
        "Kanpur",
        "Nagpur",
        "Indore",
        "Bhopal",
        "Patna",
        "Ludhiana",
        "Agra",
        "Vadodara",
        "Nashik",
        "Faridabad",
        "Meerut",
        "Rajkot",
        "Varanasi",
        "Amritsar",
        "Ranchi",
        "Guwahati",
        "Chandigarh",
        "Jodhpur",
        "Raipur",
        "Coimbatore",
        "Visakhapatnam"
    ]
    const [placesCount, setPlacesCount] = useState(places.length / 2 - 1);

    const headings = [
        "Best Places to Eat Across Cities",
        "Best Restaurants in"
    ]

    const MorePlacesHandler = () => {
        setPlacesCount(places.length);
        let showMorePlaces = document.querySelector('#showMorePlaces');
        showMorePlaces.classList.add('invisible')
    }

    return (
        <div className="place-items-center mb-10">
            <div className="w-[900px]">
                <h1 className="flex ps-6 text-[24px] font-bold ">Best Places to Eat Across Cities</h1>
                <div className="grid grid-cols-4 mt-5 place-items-center text-[16px] font-[500] ">
                    {places.map((place, index) => {
                        if (index < placesCount) {
                            return (
                                <div key={index} className="border-[1px] border-gray-300 rounded-2xl w-[190px] py-3 mb-5 cursor-pointer">
                                    Best Restaurants in <br /> {place}
                                </div>
                            )
                        }

                    })}
                    <button id="showMorePlaces" type="button" onClick={MorePlacesHandler} className="flex items-center justify-center text-[#ff5200] font-[500] border-[1px] border-gray-300 rounded-2xl w-[190px] h-[50px] mb-5 cursor-pointer">Show More <RiArrowDropDownLine /></button>
                </div>
            </div>
        </div>
    )
}

export default BestPlaces