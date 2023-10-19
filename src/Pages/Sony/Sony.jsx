import { useLoaderData } from "react-router-dom";
import SonyProducts from "./SonyProducts";

const Sony = () => {

const sonys = useLoaderData()

    return (
        <div>
            
            <h1 className="text-center text-3xl font-bold mt-10"> Apple Brand Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 mb-12 ">
                {
                    sonys.map(sony => <SonyProducts key={sony._id} sony={sony}></SonyProducts>)
                }
            </div>

        </div>
    );
};

export default Sony;