
import AppleProduct from "./AppleProduct";
import HeroSections from "../../HeroSection/HeroSections";
import { useEffect, useState } from "react";



const Apple = () => {


    const [appleBrands, setApple] = useState([])

    
    useEffect(() => {
        fetch('http://localhost:5000/products/Apple')
            .then(res => res.json())
            .then(data => setApple(data))
    }, [])



    return (

        <div>
            <div className="mt-2">
                <HeroSections></HeroSections>
            </div>


            <h1 className="text-center text-3xl font-bold mt-10"> Apple Brand Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 mb-12 ">

                {
                    appleBrands.map(apples=> <AppleProduct key={apples._id} apples={apples}></AppleProduct>)
                }

            </div>

        </div>
    );
};

export default Apple;