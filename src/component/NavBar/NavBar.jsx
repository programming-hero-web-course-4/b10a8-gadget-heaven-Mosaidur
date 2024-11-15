import { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { getCart, getWish } from "../../utility/addToDb";

const NavBar = () => {
    const [cartData, setCartData] = useState([]);
    const location = useLocation();

    useEffect(() => {
        setCartData(getCart());  // Update cart data when component mounts
    }, []);

    const initialWishList = getWish();

    const links = <>
        <li className={` ${location.pathname==="/"? "font-bold md:text-white":location.pathname==="/"? "":""}`}><Link to={'/'}>Home</Link> </li>
        <li className={` ${location.pathname==="/"? " md:text-white":location.pathname==="/statistics"? "font-bold":""}`}><Link to={'/statistics'}>Statistics</Link></li>
        <li className={` ${location.pathname==="/"? " md:text-white":location.pathname==="/dashboard"? "font-bold":""}`}><Link to={'/dashboard'}>Dashboard</Link></li>
        <li className={` ${location.pathname==="/"? " md:text-white":location.pathname==="/post"? "font-bold":""}`}><Link to={'/post'}>Post</Link></li>
    </>;

    return (
        <div className="md:px-10 px-5 mx-auto pt-7 bg-[#F6F6F6]">
            <div className={`navbar pt-5 pb-5 rounded-t-xl md:px-24 ${location.pathname==="/"? "bg-[#9538E2]":"bg-[#F6F6F6]"}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className={` font-bold text-xl ${location.pathname==="/"? "text-white":""}`}>Dora Gadget</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="space-x-7 menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-5 ">
                    <div className="p-3 rounded-full border border-solid bg-white">
                        <div className="flex">
                            <BsCart3 />
                            <sup className="text-xs"><p>{cartData.length}</p></sup>
                        </div>
                    </div>
                    <div className="flex p-3 rounded-full border border-solid bg-white">
                            <CiHeart />
                            <sup className="text-xs"><p>{initialWishList.length}</p></sup>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
