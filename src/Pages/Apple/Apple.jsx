
import AppleProduct from "./AppleProduct";
import { useEffect, useState } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Apple = () => {


    const [appleBrands, setApple] = useState([])


    useEffect(() => {
        fetch('https://assignment-10-server-beige-mu.vercel.app/products/Apple')
            .then(res => res.json())
            .then(data => setApple(data))
    }, [])



    return (

        <div>

            {/* Slider  */}
            <div>
            <Swiper
       
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => ('')}
       onSlideChange={() => ('')}
     >
      
       <SwiperSlide><img src=" https://i.ibb.co/30SvTtw/Cover-Adds1.jpg" alt="" style={{width:"100%", height:"500px"}} />
       </SwiperSlide>
      
       <SwiperSlide><img src="https://i.ibb.co/FWPb7kh/banner-adds-2.webp" alt="" style={{width:"100%", height:"500px"}} /></SwiperSlide>

       <SwiperSlide><img src="https://i.ibb.co/5G8QNxt/banner-adds-3.webp" alt="" style={{width:"100%", height:"500px"}} /></SwiperSlide>
  
     </Swiper>
            </div>


            <h1 className="text-center text-3xl font-bold mt-10"> Apple Brand Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 mb-12 ">

                {
                    appleBrands.map(apples => <AppleProduct key={apples._id} apples={apples}></AppleProduct>)
                }

            </div>

        </div>
    );
};

export default Apple;