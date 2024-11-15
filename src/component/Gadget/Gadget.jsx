import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Gadget = ({gadget}) => {

    const {product_id, product_image, product_title, price } = gadget;
    return (
        <div>
            <div className="flex justify-center">
                <div className="flex flex-col justify-between space-y-3 bg-white p-5 rounded-2xl">
                    <div className="space-y-3">
                        <img className="w-[283px] h-[181px] object-cover rounded-xl" src={product_image} alt={product_title} />
                        <h1 className="text-lg font-semibold">{product_title}</h1>
                        <p className="font-medium">Prise: {price} $</p>
                    </div>
                    <div className="flex flex-col">
                        <Link to={`/gadget/${product_id}`}><button to={`/gadget/${product_id}`}  className="btn text-[#9538E2] rounded-full border-[2px] border-solid border-[#9538E2]">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadget;