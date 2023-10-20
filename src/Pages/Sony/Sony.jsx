
import { useEffect, useState } from "react";
import SonyProducts from "./SonyProducts";
import HeroSections from "../../HeroSection/HeroSections";

const Sony = () => {





    const [sonyBrand, setSonyBrand] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/products/Sony')
            .then(res => res.json())
            .then(data => setSonyBrand(data))
    }, [])





    return (
        <div>

            <div className="mt-2">
                <HeroSections></HeroSections>
            </div>

            <h1 className="text-center text-3xl font-bold mt-10"> Apple Brand Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 mb-12 ">

                {
                    sonyBrand.map(sonys => <SonyProducts key={sonys._id} sonys={sonys}></SonyProducts>)
                }

            </div>

        </div>
    );
};

export default Sony;