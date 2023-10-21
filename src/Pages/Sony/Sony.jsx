
import { useEffect, useState } from "react";
import SonyProducts from "./SonyProducts";


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Sony = () => {

    const [sonyBrand, setSonyBrand] = useState([])


    useEffect(() => {
        fetch('https://assignment-10-server-beige-mu.vercel.app/products/Sony')
            .then(res => res.json())
            .then(data => setSonyBrand(data))
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
      
       <SwiperSlide><img src="https://i.ibb.co/w7JVsSz/banner-adds-sony.jpg" alt="" style={{width:"100%", height:"500px"}} />
       </SwiperSlide>
      
       <SwiperSlide><img src="https://i.ibb.co/ZVhS4nc/sony-addss.jpg" alt="" style={{width:"100%", height:"500px"}} /></SwiperSlide>

       <SwiperSlide><img src="https://i.ibb.co/StwvS5D/sony-slider-adds.jpg" alt="" style={{width:"100%", height:"500px"}} /></SwiperSlide>
  
     </Swiper>
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