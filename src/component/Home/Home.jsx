import { useEffect, useState } from "react";
import vr from "../../assets/banner.jpg";
import Gadgets from "../Gadgets/Gadgets";
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Home = () => {
    const [gadgets, setGadgets] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All Product");

    useEffect(() => {
        fetch('./product.json')
            .then(res => res.json())
            .then(data => setGadgets(data));
    }, []);

    useEffect(() => {
        fetch('./categories.json')
            .then(res => res.json())
            .then(data => setCategories(data.categories));
    }, []);

    const filteredGadgets = gadgets.filter(
        gadget => selectedCategory === "All Product" || gadget.category === selectedCategory
    );

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dora Gadget || Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <NavBar></NavBar>
            <div className="md:px-10 px-5 mx-auto">
                <div className="text-center space-y-5 py-16 bg-[#9538E2] rounded-b-xl md:pb-52 pb-28">
                    <h1 className="font-bold md:text-5xl text-xl text-white px-5">
                        Upgrade Your Tech Accessorize with<br />Gadget Heaven Accessories
                    </h1>
                    <p className="text-white px-5 md:text-base text-xs">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to<br />
                        the coolest accessories, we have it all!
                    </p>
                    <Link to="dashboard"><button className="btn rounded-full text-[#9538E2] px-7 mt-5">Dashboard</button></Link>
                </div>
                
                <div className="flex justify-center md:-mt-48 -mt-24 p-5">
                    <div className="border-[2px] border-solid p-5 rounded-2xl bg-white/30">
                        <img className="md:w-[1062px] md:h-[563px] object-cover rounded-xl" src={vr} alt="vr-image" />
                    </div>
                </div>
                
                <div className="max-w-7xl mx-auto">
                    <div className="pt-16 pb-10">
                        <h1 className="text-center font-bold md:text-3xl text-xl text-[#0B0B0B]">Explore Cutting-Edge Gadgets</h1>
                    </div>
                    
                    <div id="shop" className="lg:flex gap-5">
                        <div className="lg:w-[20%] p-5 bg-white rounded-2xl space-y-4">
                            <div className="text-center">
                                <p className="font-bold text-xl">Category</p>
                            </div>
                            <hr />
                            <div className="grid lg:grid-cols-1 grid-cols-2 gap-5 lg:text-base text-xs">
                                <button className={`text-center p-4 rounded-full ${selectedCategory === "All Product" ? "bg-[#9538E2] text-white" : "bg-gray-300"}`} onClick={() => setSelectedCategory("All Product")}>
                                    All Product
                                </button>
                                {categories.map((category, index) => (
                                    <button key={index} className={`text-center p-4 rounded-full ${selectedCategory === category ? "bg-[#9538E2] text-white" : "bg-gray-300"}`} onClick={() => setSelectedCategory(category)}>
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        <div className="lg:w-[80%]">
                            <Gadgets gadgets={filteredGadgets} ></Gadgets>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    );
};

export default Home;
