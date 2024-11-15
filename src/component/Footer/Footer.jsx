const Footer = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto pt-1 mt-10">
                <div className="my-20 space-y-10 md:mx-10 mx-5">
                    <div className="text-center space-y-3">
                        <h1 className="font-bold md:text-4xl text-xl">Gadget Heaven</h1>
                        <p className="text-rgb(9, 8, 15, 60%)">Leading the way in cutting-edge technology and innovation.</p>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div>
                        <footer className="md:flex justify-between md:space-y-0 space-y-10">
                            <nav className="flex flex-col items-center space-y-4">
                                <h6 className="font-bold text-lg text-[#000000]">Services</h6>
                                <a className="link-hover">Product Support</a>
                                <a className="link-hover">Order Tracking</a>
                                <a className="link-hover">Shipping & Delivery</a>
                                <a className="link-hover">Returns</a>
                            </nav>
                            <nav className="flex flex-col items-center space-y-4">
                                <h6 className="font-bold text-lg text-[#000000]">Company</h6>
                                <a className="link-hover">About us</a>
                                <a className="link-hover">Careers</a>
                                <a className="link-hover">Contact</a>
                            </nav>
                            <nav className="flex flex-col text-lg items-center space-y-4">
                                <h6 className="font-bold text-[#000000]">Legal</h6>
                                <a className="link-hover">Terms of use</a>
                                <a className="link-hover">Privacy policy</a>
                                <a className="link-hover">Cookie policy</a>
                            </nav>
                        </footer>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;