import { useLoaderData } from "react-router-dom";
import AppleProduct from "./AppleProduct";
import HeroSections from "../../HeroSection/HeroSections";


const Apple = () => {

    const apples = useLoaderData();



    return (

        <div>
             <div className="mt-2">
             <HeroSections></HeroSections>
             </div>


            <h1 className="text-center text-3xl font-bold mt-10"> Apple Brand Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 mb-12 ">
                {
                    apples.map(apple => <AppleProduct key={apple._id} apple={apple}></AppleProduct>)
                }
            </div>

        </div>
    );
};

export default Apple;