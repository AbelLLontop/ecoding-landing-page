import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import srcAnalitica from '../assets/analitica.png';

import './styles.css';
export default () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  
  return (
    <>
    <Swiper
      pagination={pagination}
      modules={[Pagination]}
      className="mySwiper"
      centeredSlides={true}
      spaceBetween={30}	
      slidesPerView={1}
      breakpoints={{
        1200:{
          slidesPerView: 2,
        },
        
      }}
         
    >
      <SwiperSlide className='transition-all'>
      <img src={srcAnalitica.src} alt="" />
      </SwiperSlide>
      <SwiperSlide className='transition-all'>
        <img src={srcAnalitica.src} alt="" />
      </SwiperSlide>
      <SwiperSlide className='transition-all' >
      <img src={srcAnalitica.src} alt="" />
      </SwiperSlide>
      <SwiperSlide className='transition-all'>
        <img src={srcAnalitica.src} alt="" />
      </SwiperSlide>
     
    </Swiper>
  </>
  );
};