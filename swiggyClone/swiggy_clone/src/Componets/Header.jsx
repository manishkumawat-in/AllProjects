import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { Bs0Square } from "react-icons/bs";

function Header() {

    const navLinks = [
        {
            icon: <CorporateIcon />,
            name: "Swiggy Corporate"
        },
        {
            icon: <IoIosSearch />,
            name: "Search"
        },
        {
            icon: <BiSolidOffer />,
            name: "Offers",
            sup: "NEW"
        },
        {
            icon: <IoHelpBuoyOutline />,
            name: "Help"
        },
        {
            icon: <FaRegUser />,
            name: "Sign In"
        },
        {
            icon: <Bs0Square />,
            name: "Cart"
        }
    ]

    return (
        <>
            <header className="flex items-center bg-white h-[80px] shadow-2xl w-[1280px] mx-auto">
                <div className="flex items-center w-[100px]">
                    <img src="images/logo.png" alt="Swiggy" className="w-full" />
                </div>
                <div className="flex items-center cursor-pointer px-7">
                    <h1 className="hover:text-[#ff5200] text-[14px] font-[650] underline">Other</h1>
                    <span className="text-4xl text-[#ff5200]"><RiArrowDropDownLine /></span>
                </div>
                <nav className="ml-auto flex">
                    {
                        navLinks.map((link, index) => (
                            <li key={index} className="flex items-center list-none px-3 font-[600] text-[16px] hover:text-[#ff5200] cursor-pointer">
                                <span className="text-[24px]">{link.icon}</span>
                                <span className="px-2">{link.name}</span>
                                {
                                    link.sup && <sup className="text-[#ffa700] text-[10px]">{link.sup}</sup>
                                }
                            </li>
                        ))
                    }

                </nav>
            </header>
        </>
    )
}

export default Header

function CorporateIcon() {
    return (
        <svg className="ppAwf" viewBox="0 0 20 20" height={20} width={20} fill="none"><rect x="2.46094" y="7.98145" width="15.0784" height="10.7765" rx="1.52523" stroke="#02060C" strokeOpacity="0.75" fill="none" strokeWidth="1.8" strokeLinejoin="round" /><path d="M6.17822 4.91866C6.17822 3.90782 6.99767 3.08838 8.0085 3.08838H11.9916C13.0024 3.08838 13.8219 3.90782 13.8219 4.91866V5.22965C13.8219 5.61625 13.5085 5.92965 13.1219 5.92965H6.87822C6.49162 5.92965 6.17822 5.61625 6.17822 5.22965V4.91866Z" fill="#02060C" fillOpacity="0.75" /></svg>
    );
}