import { useEffect, useState } from "react";
import GoogleProducts from "./GoogleProducts";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


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
      
       <SwiperSlide><img src="https://i.ibb.co/nLTmLjh/Pixel-Watch.webp" alt="" style={{width:"100%", height:"500px"}} />
       </SwiperSlide>
      
       <SwiperSlide><img src="https://i.ibb.co/K0ckh02/hq720.jpg" alt="" style={{width:"100%", height:"500px"}} /></SwiperSlide>

       <SwiperSlide><img src="https://i.ibb.co/y5W58QB/screenshot-353.webp" alt="" style={{width:"100%", height:"500px"}} /></SwiperSlide>
  
     </Swiper>
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