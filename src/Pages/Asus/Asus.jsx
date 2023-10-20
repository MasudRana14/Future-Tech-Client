import { useEffect, useState } from "react";
import HeroSections from "../../HeroSection/HeroSections";
import AsusProduct from "./AsusProduct";

const Asus = () => {


    const [asusBrands, setAsusBrand] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/products/Asus')
            .then(res => res.json())
            .then(data => setAsusBrand(data))
    }, [])


    return (

        <div>
            <div className="mt-2">
                <HeroSections></HeroSections>
            </div>


            <h1 className="text-center text-3xl font-bold mt-10"> Apple Brand Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 mb-12 ">

                {
                    asusBrands.map(asus => <AsusProduct key={asus._id} asus={asus}></AsusProduct>)
                }

            </div>

        </div>
    );
};

export default Asus;