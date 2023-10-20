import { useEffect, useState } from "react";
import HeroSections from "../../HeroSection/HeroSections";
import GoogleProducts from "./GoogleProducts";


const Google = () => {


    const [googleBrands, setGoogleBrand] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/products/Google')
            .then(res => res.json())
            .then(data => setGoogleBrand(data))
    }, [])

    return (
        <div>
            <div className="mt-2">
                <HeroSections></HeroSections>
            </div>


            <h1 className="text-center text-3xl font-bold mt-10"> Apple Brand Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 mb-12 ">

                {
                   googleBrands.map(google => <GoogleProducts key={google._id} google={google}></GoogleProducts>)
                }

            </div>

        </div>
    );
};

export default Google;