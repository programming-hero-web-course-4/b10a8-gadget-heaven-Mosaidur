import { useLoaderData, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { addToCart, addToWish, getWish } from "../../utility/addToDb";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "../NavBar/NavBar";
import { useState } from 'react';
import { getCart } from "../../utility/addToDb";
import { useEffect} from "react";
import ReactStars from "react-rating-stars-component";

const ViewGadget = () => {

    const { product_id } = useParams();
    const data = useLoaderData();

    const gadget = data.find(gadget => gadget.product_id === product_id);
    const { product_title, product_image, price, description, Specification, rating, availability } = gadget;


    const initialWishList = getWish();
    const [isInWishList, setIsInWishList] = useState(initialWishList.includes(product_id));

    const handleAddToCart = (product_id) => {
        toast.success("Successfully Added to Cart!!");
        addToCart(product_id);
    };

    const handleAddToWish = (product_id) => {
        if (!isInWishList) {
            toast.success("Successfully Added to Wishlist!!");
            setIsInWishList(true); 
            addToWish(product_id);
        }
    };

    const [cartData, setCartData] = useState([]);
    const location = useLocation();

    useEffect(() => {
        setCartData(getCart());
    }, [handleAddToCart]);
    

    const links = <>
        <li className={` ${location.pathname==="/"? "font-bold md:text-white":location.pathname==="/"? "":""}`}><Link to={'/'}>Home</Link> </li>
        <li className={` ${location.pathname==="/"? " md:text-white":location.pathname==="/statistics"? "font-bold":""}`}><Link to={'/statistics'}>Statistics</Link></li>
        <li className={` ${location.pathname==="/"? " md:text-white":location.pathname==="/dashboard"? "font-bold":""}`}><Link to={'/dashboard'}>Dashboard</Link></li>
        <li className={` ${location.pathname==="/"? " md:text-white":location.pathname==="/post"? "font-bold":""}`}><Link to={'/post'}>Post</Link></li>
    </>;

    const firstExample = {
        size: 25,
        value: rating,
        edit: false
    };

    return (
        <div>
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
            <div>
                <div className="text-center space-y-5 py-16 bg-[#9538E2] pb-52">
                    <h1 className="font-bold text-3xl text-white">Product Details</h1>
                    <p className="text-white">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to<br />
                        the coolest accessories, we have it all!
                    </p>
                </div>
                <div className="flex md:flex-row flex-col md:space-x-10 md:space-y-0 space-y-5 max-w-7xl mx-auto -mt-44 bg-white rounded-2xl p-5">
                    <div>
                        <img src={product_image} alt={product_title} className="w-[425px] h-[503px] object-cover rounded-lg" />
                    </div>
                    <div className="flex flex-col justify-center space-y-3">
                        <h2 className="text-3xl font-semibold">{product_title}</h2>
                        <h4 className="text-xl font-semibold">Price: {price}</h4>
                        <div>
                            <button className={`border-[2px] border-solid ${availability ? 'bg-green-200 border-green-600 text-green-600' : 'bg-red-200 border-red-600 text-red-600'} text-green-600 px-3 py-1 text-xs rounded-full`}>
                                {availability ? 'In Stock' : 'Out of Stock'}
                            </button>
                        </div>
                        <p>{description}</p>
                        <h4 className="font-semibold">Specification</h4>
                        {Specification.map((specification, idx) => <p key={idx}>{idx + 1}. {specification}</p>)}
                        <div className="flex space-x-2">
                            <h4 className="font-semibold">Rating:</h4>
                            <p>{rating}</p>
                        </div>
                        <div className="flex">
                            <ReactStars {...firstExample} />
                        </div>
                        <div className="flex space-x-3">
                            <button onClick={() => {handleAddToCart(product_id);}} className="flex bg-[#9538E2] text-white py-3 px-5 rounded-full space-x-2">
                                <div>Add To Cart</div>
                            </button>
                            <button
                                onClick={() => handleAddToWish(product_id)}
                                className={`btn border-[1px] border-solid border-gray-300 rounded-full ${isInWishList ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={isInWishList}
                            >
                                <FaRegHeart />
                            </button>
                        </div>
                    </div>
                </div>
                <ToastContainer position="top-center" />
            </div>
        </div>
    );
};

export default ViewGadget;
