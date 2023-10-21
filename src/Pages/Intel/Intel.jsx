import { useEffect, useState } from "react";
import IntelProduct from "./IntelProduct";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Intel = () => {


    
    const [intelBrands, setIntelBrand] = useState([])

    
    useEffect(() => {
        fetch('https://assignment-10-server-beige-mu.vercel.app/products/Intel')
            .then(res => res.json())
            .then(data => setIntelBrand(data))
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
      
       <SwiperSlide><img src="https://i.ibb.co/Qc2dpQZ/Intel-adds-1.jpg" alt="" style={{width:"100%", height:"500px"}} />
       </SwiperSlide>
      
       <SwiperSlide><img src="https://i.ibb.co/KmJfbdN/intel-adds-3.jpg" alt="" style={{width:"100%", height:"500px"}} /></SwiperSlide>

       <SwiperSlide><img src="https://i.ibb.co/VQXsKr5/intel-adds-2.jpg" alt="" style={{width:"100%", height:"500px"}} /></SwiperSlide>
  
     </Swiper>
            </div>


            <h1 className="text-center text-3xl font-bold mt-10"> Apple Brand Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 mb-12 ">

                {
                   intelBrands.map(intel=> <IntelProduct key={intel._id} intel={intel}></IntelProduct>)
                }

            </div>

        </div>
    );
};

export default Intel;