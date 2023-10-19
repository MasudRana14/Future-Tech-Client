import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const HeroSections = () => {


    return (
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
       
        <SwiperSlide><img src=" https://i.ibb.co/30SvTtw/Cover-Adds1.jpg" alt="" style={{width:"100%", height:"500px"}} />
        </SwiperSlide>
       
        <SwiperSlide><img src="https://i.ibb.co/FWPb7kh/banner-adds-2.webp" alt="" style={{width:"100%", height:"500px"}} /></SwiperSlide>

        <SwiperSlide><img src="https://i.ibb.co/5G8QNxt/banner-adds-3.webp" alt="" style={{width:"100%", height:"500px"}} /></SwiperSlide>
   
      </Swiper>
    );
};

export default HeroSections;