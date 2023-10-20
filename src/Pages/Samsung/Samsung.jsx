import { useEffect, useState } from "react";
import HeroSections from "../../HeroSection/HeroSections";
import SamsungProducts from "./SamsungProducts";

const Samsung = () => {


    const [samsungBrands, setSamsungBrand] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/products/Samsung')
            .then(res => res.json())
            .then(data => setSamsungBrand(data))
    }, [])


    return (

        <div>
            <div className="mt-2">
                <HeroSections></HeroSections>
            </div>


            <h1 className="text-center text-3xl font-bold mt-10"> Apple Brand Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 mb-12 ">

                {
                    samsungBrands.map(samsung => <SamsungProducts key={samsung._id} samsung={samsung}></SamsungProducts>)
                }

            </div>

        </div>
    );
};

export default Samsung;