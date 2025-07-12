import { FaLinkedin  } from "react-icons/fa"
import { FaFacebookF, FaPinterest, FaTwitter } from "react-icons/fa6"
import { IoLogoInstagram } from "react-icons/io"
import { RiArrowDropDownLine } from "react-icons/ri"

function Footer() {
    return (
        <div className="bg-[#f0f0f5] h-[840px]">
            <div className="flex place-content-center">
                <div className="grid grid-cols-2 justify-items-center text-[24px] font-[800] border-t-[1px] py-10">
                    <div className="w-[550px]">
                        For better experience,download the Swiggy app now
                    </div>
                    <div className="flex w-[380px]">
                        <img className="w-[190px] me-[20px]" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="" />
                        <img className="w-[190px]" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="">
                <div className="grid grid-cols-6 w-[80%] mx-auto text-start font-[500] text-[#02060c99] mt-20">
                    <div className="col-span-2">
                        <div className="flex items-center mb-3">
                            <img className="w-[130px]" src="/images/logo.png" alt="" /> <span className="text-[#ff5200] text-3xl ms-[-20px] font-bold">Swiggy</span>
                        </div>
                        <div className="text-start ms-10">
                            © 2025 Swiggy Limited
                        </div>
                    </div>
                    <div className="grid gap-y-3">
                        <h1 className="font-bold text-black">Company</h1>
                        <a href="#">About Us</a>
                        <a href="#">Swiggy <br /> Corporates</a>
                        <a href="#">Careers</a>
                        <a href="#">Team</a>
                        <a href="#">Swiggy <br /> One</a>
                        <a href="#">Swiggy <br /> Instamart</a>
                        <a href="#">Swiggy <br /> Dineout</a>
                        <a href="#">Swiggy <br /> Genie</a>
                        <a href="#">Minis</a>
                        <a href="#">Pyng</a>
                    </div>
                    <div className="grid row-span-2">
                        <div className="grid h-40">
                            <h1 className="font-bold text-black">Contact Us</h1>
                            <a href="#">Help & <br /> Support</a>
                            <a href="#">Partner With Us</a>
                            <a href="#">Ride With Us</a>
                        </div>
                        <div className="grid h-52 mt-52">
                            <h1 className="font-bold text-black">Leagal</h1>
                            <a href="#">Terms & <br /> Condition</a>
                            <a href="#">Cookie Policy</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Investor <br /> Relations</a>
                        </div>
                    </div>
                    <div className="grid justify-center">
                        <h1 className="font-bold text-black">Available in:</h1>
                        <a href="#">Bagalore</a>
                        <a href="#">Gurgaon</a>
                        <a href="#">Hyderabad</a>
                        <a href="#">delhi</a>
                        <a href="#">Mumbai</a>
                        <a href="#">Pune</a>
                        <button type="button" className="flex items-center border-[1px] rounded-xl h-[33px] place-content-evenly px-5">679 cities <RiArrowDropDownLine /></button>

                    </div>
                    <div className="grid row-span-2">
                        <div className="grid h-40">
                            <h1 className="font-bold text-black">Life at Swiggy</h1>
                        <a href="#">Explore With Swiggy</a>
                        <a href="#">Swiggy News</a>
                        <a href="#">Snackables</a>
                        </div>
                        <div className="mt-52 h-52">
                            <h1 className="font-bold text-black">Social Links</h1>
                            <div className="grid grid-cols-5 mt-5 text-xl">
                                <FaLinkedin  />
                                <IoLogoInstagram />
                                <FaFacebookF />
                                <FaPinterest />
                                <FaTwitter />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer