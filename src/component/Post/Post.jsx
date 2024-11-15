import React from 'react';
import NavBar from '../NavBar/NavBar';

const Post = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='bg-[#9538E2] py-16 lg:mt-0 mt-5'>
                <div className="flex lg:flex-row flex-col max-w-6xl lg:mx-auto lg:mt-6 -mt-9 ">
                    <div className="bg-white p-5 lg:m-2.5 mx-5 my-2.5 rounded-2xl space-y-2 flex lg:flex-col md:flex-row flex-col lg:w-1/3">
                        <div className="flex flex-col lg:mr-0 md:mr-5">
                            <img src="https://www.justuno.com/wp-content/uploads/2019/07/Cart-Abandonment-Offers.png" alt="Home Decoration Tips" />
                        </div>
                        <div>
                            <div className="flex text-sm text-lightergray space-x-2">
                                <div className="flex space-x-2">
                                    <i className="fa-regular fa-calendar-days"></i>
                                    <div>July 14, 2024</div>
                                </div>
                                <div className="flex space-x-2">
                                    <i className="fa-solid fa-user-large"></i>
                                    <div>By Admin</div>
                                </div>
                            </div>
                            <span className="font-extrabold text-lg">
                                15% off for first order
                            </span>
                            <p className="text-mediumgray">Get discount and buy more.</p>
                            <button className="font-extrabold flex items-center text-lg">
                                Read More 
                            </button>
                        </div>
                    </div>
                    <div className="bg-white p-5 lg:m-2.5 mx-5 my-2.5 rounded-2xl space-y-2 flex lg:flex-col md:flex-row flex-col lg:w-1/3">
                        <div className="flex flex-col lg:mr-0 md:mr-5">
                            <img src="https://i.ytimg.com/vi/ql-8kKtCxxY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCW1seiRV_540OXCH2uVf4NrKOPfw" alt="Furniture Tips" />
                        </div>
                        <div>
                            <div className="flex text-sm text-lightergray space-x-3">
                                <div className="flex space-x-2">
                                    <i className="fa-regular fa-calendar-days"></i>
                                    <div>July 14, 2024</div>
                                </div>
                                <div className="flex space-x-2">
                                    <i className="fa-solid fa-user-large"></i>
                                    <div>By Admin</div>
                                </div>
                            </div>
                            <span className="font-extrabold text-lg">
                                Get E-commerce website
                            </span>
                            <p className="text-mediumgray">You can get this e-commerce website.</p>
                            <button className="font-extrabold flex items-center text-lg">
                                Read More 
                            </button>
                        </div>
                    </div>
                    <div className="bg-white p-5 lg:m-2.5 mx-5 my-2.5 rounded-2xl space-y-2 flex lg:flex-col md:flex-row flex-col lg:w-1/3">
                        <div className="flex flex-col lg:mr-0 md:mr-5">
                            <img src="https://cdn.prod.website-files.com/65713c5060473f4d62aa6e2a/6647567e39301d45105d67c9_Ecommerce%20Promotion%20Ideas%20to%20Boost%20Sales.jpg" alt="Tree Selection Tips" />
                        </div>
                        <div>
                            <div className="flex text-sm text-lightergray space-x-3">
                                <div className="flex space-x-2">
                                    <i className="fa-regular fa-calendar-days"></i>
                                    <div>July 14, 2024</div>
                                </div>
                                <div className="flex space-x-2">
                                    <i className="fa-solid fa-user-large"></i>
                                    <div>By Admin</div>
                                </div>
                            </div>
                            <span className="font-extrabold text-lg">
                                Promo your e-commerce website
                            </span>
                            <p className="text-mediumgray">Bost the website and increase the user.</p>
                            <button className="font-extrabold flex items-center text-lg">
                                Read More 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
