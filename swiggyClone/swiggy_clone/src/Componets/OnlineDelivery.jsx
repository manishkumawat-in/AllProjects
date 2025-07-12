import { RiArrowDropDownLine } from 'react-icons/ri'
import { CiFilter } from 'react-icons/ci'
import { useApiData } from '../context/SwiggyApiContext'
import Card from './Card'



const filters = [
    {
        name: "Filter",
        icon: <CiFilter />
    },
    {
        name: "Sort By",
        icon: <RiArrowDropDownLine />
    },
    {
        name: "Fast Delivery"
    },
    {
        name: "Rating 4.0+"
    },
    {
        name: "Pure Veg"
    },
    {
        name: "Offers"
    },
    {
        name: "Rs. 300-Rs. 600"
    },
    {
        name: "Less Than Rs. 300"
    }
]

function OnlineDelivery() {

    const {topRestaurantChains} = useApiData();

    return (
        <div className='flex-auto my-5'>
            <h1 className='text-[24px] font-[800] flex '>Restaurants with online food delivery in Jodhapur</h1>
            <div className='flex '>
                {filters.map((filter, index) => <Filters key={index} filter={filter} />)}
            </div>
            <div className='grid grid-cols-4 place-items-center'>
                {topRestaurantChains.map((res, index) => (
                    <div key={index} className='w-[230px] mb-8 cursor-pointer'>
                        <Card props={res}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OnlineDelivery

const Filters = ({ filter }) => {
    return (
        <div className='flex items-center border-[1px] border-gray-400 rounded-2xl px-2 py-1 place-content-evenly w-auto my-6 mx-1 cursor-pointer gap-1'>
            {filter.name} {filter.icon && filter.icon}
        </div>
    )
}