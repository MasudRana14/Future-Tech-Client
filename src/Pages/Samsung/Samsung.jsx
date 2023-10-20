import { useEffect, useState } from "react";
import SamsungProducts from "./SamsungProducts";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


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

                    <SwiperSlide><img src="https://i.ibb.co/svjC6Gw/Samsung-Love-Galaxy.webp" alt="" style={{ width: "100%", height: "500px" }} />
                    </SwiperSlide>

                    <SwiperSlide><img src="https://i.ibb.co/1vbD56B/samsung-adds-2.jpg" alt="" style={{ width: "100%", height: "500px" }} /></SwiperSlide>

                    <SwiperSlide><img src="https://i.ibb.co/3sg4Wy9/samsung-adds.webp" alt="" style={{ width: "100%", height: "500px" }} /></SwiperSlide>

                </Swiper>
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