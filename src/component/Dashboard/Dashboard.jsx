import React, { useEffect, useState } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useLoaderData} from 'react-router-dom';
import { addToCart, getCart, getWish, removeFromCart, removeFromWish } from '../../utility/addToDb';
import { GoSortDesc } from "react-icons/go";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useNavigate, Link, useLocation } from 'react-router-dom';
import {Helmet} from "react-helmet";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import success from "../../assets/Group.png";

import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";


const Dashboard = () => {

    const navigate = useNavigate();

    const data = useLoaderData();
    const [cart, setCart] = useState([]);
    const [wish, setWish] = useState([]);
    const [isAscending, setIsAscending] = useState(true);

    const cartId = getCart();
    const wishId = getWish();
    useEffect(() => {
        const cartId = getCart();
        const cartList = data.filter(gadget => cartId.includes(gadget.product_id));
        setCart(cartList);
    }, []);

    useEffect(() => {
        const wishId = getWish();
        const wishList = data.filter(gadget => wishId.includes(gadget.product_id));
        setWish(wishList);
    }, []);

    const handleRemoveFromCart = (id) => {
        toast.success("Successfully removed");
        setCart(prevCart => {
            const updatedCart = prevCart.filter(item => item.product_id !== id);
            return updatedCart;
        });
        removeFromCart(id);
    };
    const handleRemoveFromWish = (id) => {
        toast.success("Successfully removed");
        setWish(prevWish => {
            const updatedWish = prevWish.filter(item => item.product_id !== id);
            return updatedWish;
        });
        removeFromWish(id);
    };

    const handleSortByPrice = () => {
        setCart(prevCart => {
            const sortedCart = [...prevCart].sort((a, b) =>
                isAscending ? b.price - a.price : a.price - b.price
            );
            return sortedCart;
        });
        setIsAscending(!isAscending);
    };

    const totalCost = cart.reduce((acc, item) => acc + item.price, 0);

    const purchase = () => {
        document.getElementById('success-popup').classList.remove('hidden');
    }
    const cleanCart = () => {
        localStorage.removeItem('cart-list');
        setCart([]);
        document.getElementById('success-popup').classList.add('hidden');
        navigate('/');
    }
    const cartTabOpen = () => {
        document.getElementById('cartTab').classList.remove('hidden');
        document.getElementById('wishTab').classList.add('hidden');
    }
    const wishTabOpen = () => {
        document.getElementById('cartTab').classList.add('hidden');
        document.getElementById('wishTab').classList.remove('hidden');
    }

    const handleAddToCart = (product_id) => {
        toast.success("Successfully Added to Cart!!");
        addToCart(product_id);
    };

    const location = useLocation();

    const links = <>
        <li className={` ${location.pathname==="/"? "font-bold md:text-white":location.pathname==="/"? "":""}`}><Link to={'/'}>Home</Link> </li>
        <li className={` ${location.pathname==="/"? " md:text-white":location.pathname==="/statistics"? "font-bold":""}`}><Link to={'/statistics'}>Statistics</Link></li>
        <li className={` ${location.pathname==="/"? " md:text-white":location.pathname==="/dashboard"? "font-bold":""}`}><Link to={'/dashboard'}>Dashboard</Link></li>
        <li className={` ${location.pathname==="/"? " md:text-white":location.pathname==="/post"? "font-bold":""}`}><Link to={'/post'}>Post</Link></li>
    </>;

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dora Gadget || Dashboard</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

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
                                <sup className="text-xs"><p>{cartId.length}</p></sup>
                            </div>
                        </div>
                        <div className="flex p-3 rounded-full border border-solid bg-white">
                                <CiHeart />
                                <sup className="text-xs"><p>{wishId.length}</p></sup>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div id="success-popup" className="fixed inset-0 flex items-center justify-center bg-black/50 hidden">
                    <div className="bg-white px-20 py-5 rounded-lg shadow-lg text-center space-y-5">
                        <div className='space-y-3'>
                            <div className='flex justify-center'><img className='size-20' src={success} alt="success" /></div>
                            <div className="font-bold text-2xl pb-3">Payment Successfully</div>
                        </div>

                        <hr />
                        <div className='space-y-3'>
                            <div className="text-sm text-chinese-black-sev pb-3">Thanks for purchasing</div>
                            <div className="font-bold pb-3">Total: ${totalCost.toFixed(2)}</div>
                            <button id="close-popup" onClick={cleanCart} className="btn">Close</button>
                        </div>
                    </div>
                </div>
                <div className="text-center space-y-5 py-16 bg-[#9538E2] p-5">
                    <h1 className="font-bold md:text-5xl text-3xl text-white">Dashboard</h1>
                    <p className="text-white md:text-base text-xs">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to<br />
                        the coolest accessories, we have it all!
                    </p>
                    <div className='flex space-x-5 justify-center'>
                        <button onClick={cartTabOpen} className="btn rounded-full text-[#9538E2] md:px-14 px-10 hover:bg-transparent hover:text-white border-[1px] border-solid">Cart</button>
                        <button onClick={wishTabOpen} className="btn rounded-full text-white bg-transparent hover:bg-white hover:text-[#9538E2] border-[1px] border-solid md:px-12 px-7">Wishlist</button>
                    </div>
                </div>

                <div id='cartTab' className='max-w-6xl mx-auto'>
                    <div className='flex md:flex-row flex-col items-center justify-between py-10'>
                        <h1 className='font-bold text-xl'>Cart</h1>
                        <div className='flex md:flex-row flex-col items-center space-x-5'>
                            <h1 className='font-bold text-xl'>Total cost: ${totalCost.toFixed(2)}</h1>
                            <div className='flex space-x-5'>
                                <button onClick={handleSortByPrice} className="btn rounded-full text-[#9538E2] bg-transparent hover:bg-[#9538E2] hover:text-white border-[1px] border-solid md:px-8 border-[#9538E2]">Sort by Price <GoSortDesc /></button>
                                <button 
                                    onClick={purchase} 
                                    className={`btn rounded-full text-white ${cart.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#9538E2]'} md:px-14 hover:bg-transparent hover:text-[#9538E2] border-[1px] border-solid hover:border-[#9538E2]`} 
                                    disabled={cart.length === 0}
                                    >
                                    Purchase
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        {cart.length === 0 ? (
                            <p className="text-center text-gray-500">Your cart is empty.</p>
                        ) : (
                            cart.map((item) => (
                                <div key={item.product_id} className='flex items-center justify-between bg-white p-5 rounded-2xl mb-4'>
                                    <div className='flex items-center space-x-7'>
                                        <div>
                                            <img className='w-[200px] h-[124px] object-cover rounded-xl' src={item.product_image} alt={item.product_title} />
                                        </div>
                                        <div className='space-y-3'>
                                            <h4 className='font-semibold text-xl'>{item.product_title}</h4>
                                            <p className='font-light'>{item.description}</p>
                                            <h5 className='font-semibold text-base'>Price: ${item.price}</h5>
                                        </div>
                                    </div>
                                    <div onClick={() => handleRemoveFromCart(item.product_id)}>
                                        <IoIosCloseCircleOutline className='text-red-600 size-8 cursor-pointer' />
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div id='wishTab' className='max-w-6xl mx-auto hidden p-5'>
                    <div className='flex items-center justify-between py-10'>
                        <h1 className='font-bold text-xl'>WishList</h1>
                    </div>

                    <div>
                        {wish.length === 0 ? (
                            <p className="text-center text-gray-500">Your wish is empty.</p>
                        ) : (
                            wish.map((item) => (
                                <div key={item.product_id} className='md:flex items-center justify-between bg-white p-5 rounded-2xl mb-4'>
                                    <div className='md:flex items-center md:space-x-7'>
                                        <div>
                                            <img className='md:w-[200px] md:h-[124px] object-cover rounded-xl' src={item.product_image} alt={item.product_title} />
                                        </div>
                                        <div className='space-y-3'>
                                            <h4 className='font-semibold text-xl'>{item.product_title}</h4>
                                            <p className='font-light'>{item.description}</p>
                                            <h5 className='font-semibold text-base'>Price: ${item.price}</h5>
                                            <button onClick={() => {handleAddToCart(item.product_id);}} className="flex bg-[#9538E2] text-white py-3 px-5 rounded-full space-x-2">
                                                <div>Add To Cart</div>
                                            </button>
                                        </div>
                                    </div>
                                    <div onClick={() => handleRemoveFromWish(item.product_id)}>
                                        <IoIosCloseCircleOutline className='text-red-600 size-8 cursor-pointer' />
                                    </div>

                                </div>
                            ))
                        )}
                    </div>
                </div>
                <ToastContainer position="top-center"/>
            </div>
        </div>
    );
};

export default Dashboard;
