import { useEffect, useState } from "react";
import AsusProduct from "./AsusProduct";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Asus = () => {


    const [asusBrands, setAsusBrand] = useState([])


    useEffect(() => {
        fetch('https://assignment-10-server-beige-mu.vercel.app/products/Asus')
            .then(res => res.json())
            .then(data => setAsusBrand(data))
    }, [])


    return (

        <div>

            <div className="mt-2">
                <Swiper

                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(Swiper) => ('')}
                    onSlideChange={() => ('')}
                >

                    <SwiperSlide><img src=" https://i.ibb.co/GJdr9yz/Asus-Phone-Adds.jpg" alt="" style={{ width: "100%", height: "500px" }} />
                    </SwiperSlide>

                    <SwiperSlide><img src="https://i.ibb.co/P5Hbqdj/EO8.jpg" alt="" style={{ width: "100%", height: "500px" }} /></SwiperSlide>

                    <SwiperSlide><img src="https://i.ibb.co/N1xTDBg/Asus-banner.png" alt="" style={{ width: "100%", height: "500px" }} /></SwiperSlide>

                </Swiper>
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