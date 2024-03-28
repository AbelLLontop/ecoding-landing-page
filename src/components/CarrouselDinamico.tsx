import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import srcCliente from "../assets/cliente.png";
import srcRueda from "../assets/rueda.svg";
import './styles.css';
export default () => {
  return (
    <>
    <Swiper
      modules={[Autoplay,Pagination]}
      loop={true}
      className="animSwiper"
      autoplay={{
        delay: 1800,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      slidesPerView={5}
         
    >
      <SwiperSlide className='transition-all mb-10'>
      <div className="space-y-4 max-w-sm text-white m-4">
            <div className="comment-color flex items-center justify-between p-8">
                <div className="flex items-center gap-3">
                    <img width="45" height="45" className="rounded-full" src={srcCliente.src} alt=""/>
                    <div className="text-start">
                        <div className="font-semibold">
                            Jose Montero
                        </div>
                        <div className="text-[#C0C0C0]">
                            CEO, Building House
                        </div>
                    </div>
                </div>
                <img width="28" height="28"  className="rounded-full w-[28px] h-[28px]" src={srcRueda.src} alt=""/>
                
            </div>
            <div className="comment-color text-justify p-8">
                Se encargó del diseño de nuestro sitio web, pero también recibimos asesoramiento de servicio técnico y empresarial. El trabajo que realizan es altamente recomendable.  pero también recibimos asesoramiento de servicio técnico y empresarial. El trabajo que realizan es altamente recomendable.
            </div>


        </div>
      </SwiperSlide>
      <SwiperSlide className='transition-all'>
      <div className="space-y-4 max-w-sm text-white m-4">
            <div className="comment-color flex items-center justify-between p-8">
                <div className="flex items-center gap-3">
                    <img width="45" height="45" className="rounded-full" src={srcCliente.src} alt=""/>
                    <div className="text-start">
                        <div className="font-semibold">
                            Jose Montero
                        </div>
                        <div className="text-[#C0C0C0]">
                            CEO, Building House
                        </div>
                    </div>
                </div>
                <img width="28" height="28"  className="rounded-full w-[28px] h-[28px]" src={srcRueda.src} alt=""/>
                
            </div>
            <div className="comment-color text-justify p-8">
                Se encargó del diseño de nuestro sitio web, pero también recibimos asesoramiento de servicio técnico y empresarial. El trabajo que realizan es altamente recomendable.  pero también recibimos asesoramiento de servicio técnico y empresarial. El trabajo que realizan es altamente recomendable.
            </div>


        </div>
      </SwiperSlide>
      <SwiperSlide className='transition-all'>
      <div className="space-y-4 max-w-sm text-white m-4">
            <div className="comment-color flex items-center justify-between p-8">
                <div className="flex items-center gap-3">
                    <img width="45" height="45" className="rounded-full" src={srcCliente.src} alt=""/>
                    <div className="text-start">
                        <div className="font-semibold">
                            Jose Montero
                        </div>
                        <div className="text-[#C0C0C0]">
                            CEO, Building House
                        </div>
                    </div>
                </div>
                <img width="28" height="28"  className="rounded-full w-[28px] h-[28px]" src={srcRueda.src} alt=""/>
                
            </div>
            <div className="comment-color text-justify p-8">
                Se encargó del diseño de nuestro sitio web, pero también recibimos asesoramiento de servicio técnico y empresarial. El trabajo que realizan es altamente recomendable.  pero también recibimos asesoramiento de servicio técnico y empresarial. El trabajo que realizan es altamente recomendable.
            </div>


        </div>
      </SwiperSlide>
      <SwiperSlide className='transition-all'>
      <div className="space-y-4 max-w-sm text-white m-4">
            <div className="comment-color flex items-center justify-between p-8">
                <div className="flex items-center gap-3">
                    <img width="45" height="45" className="rounded-full" src={srcCliente.src} alt=""/>
                    <div className="text-start">
                        <div className="font-semibold">
                            Jose Montero
                        </div>
                        <div className="text-[#C0C0C0]">
                            CEO, Building House
                        </div>
                    </div>
                </div>
                <img width="28" height="28"  className="rounded-full w-[28px] h-[28px]" src={srcRueda.src} alt=""/>
                
            </div>
            <div className="comment-color text-justify p-8">
                Se encargó del diseño de nuestro sitio web, pero también recibimos asesoramiento de servicio técnico y empresarial. El trabajo que realizan es altamente recomendable.  pero también recibimos asesoramiento de servicio técnico y empresarial. El trabajo que realizan es altamente recomendable.
            </div>


        </div>
      </SwiperSlide>
      <SwiperSlide className='transition-all'>
      <div className="space-y-4 max-w-sm text-white m-4">
            <div className="comment-color flex items-center justify-between p-8">
                <div className="flex items-center gap-3">
                    <img width="45" height="45" className="rounded-full" src={srcCliente.src} alt=""/>
                    <div className="text-start">
                        <div className="font-semibold">
                            Jose Montero
                        </div>
                        <div className="text-[#C0C0C0]">
                            CEO, Building House
                        </div>
                    </div>
                </div>
                <img width="28" height="28"  className="rounded-full w-[28px] h-[28px]" src={srcRueda.src} alt=""/>
                
            </div>
            <div className="comment-color text-justify p-8">
                Se encargó del diseño de nuestro sitio web, pero también recibimos asesoramiento de servicio técnico y empresarial. El trabajo que realizan es altamente recomendable.  pero también recibimos asesoramiento de servicio técnico y empresarial. El trabajo que realizan es altamente recomendable.
            </div>


        </div>
      </SwiperSlide>
      <SwiperSlide className='transition-all'>
      <div className="space-y-4 max-w-sm text-white m-4">
            <div className="comment-color flex items-center justify-between p-8">
                <div className="flex items-center gap-3">
                    <img width="45" height="45" className="rounded-full" src={srcCliente.src} alt=""/>
                    <div className="text-start">
                        <div className="font-semibold">
                            Jose Montero
                        </div>
                        <div className="text-[#C0C0C0]">
                            CEO, Building House
                        </div>
                    </div>
                </div>
                <img width="28" height="28"  className="rounded-full w-[28px] h-[28px]" src={srcRueda.src} alt=""/>
                
            </div>
            <div className="comment-color text-justify p-8">
                Se encargó del diseño de nuestro sitio web, pero también recibimos asesoramiento de servicio técnico y empresarial. El trabajo que realizan es altamente recomendable.  pero también recibimos asesoramiento de servicio técnico y empresarial. El trabajo que realizan es altamente recomendable.
            </div>


        </div>
      </SwiperSlide>
    
     
     
    </Swiper>
  </>
  );
};