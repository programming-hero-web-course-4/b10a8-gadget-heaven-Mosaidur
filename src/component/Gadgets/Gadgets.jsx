import Gadget from "../Gadget/Gadget";

const Gadgets = ({gadgets}) => {
    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    gadgets.map(gadget => <Gadget key={gadget.id} gadget={gadget}></Gadget>)
                }
            </div>
        </div>
    );
};

export default Gadgets;