import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import {Helmet} from "react-helmet";

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dora Gadget || 404 ERROR</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <NavBar></NavBar>
            <div className="bg-[#9538E2]">
                <div className="max-w-6xl mx-auto ">
                    <div className="text-center space-y-5 py-10 ">
                        <h1 className="font-bold text-5xl text-white">Oops!</h1>
                        <p className="text-white">404 ERROR PAGE</p>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>

    );
};

export default ErrorPage;