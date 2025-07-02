'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination'; // Optional: Include pagination styles
import { Pagination, Autoplay } from 'swiper/modules'; // Import Swiper modules

export default function Card() {
  return (
    <div
      dir="rtl"
      className="  divide-gray-200 overflow-hidden rounded-lg bg-sky-30 shadow mb-7 m-2 py-20 font-almarai"
    >
      <div className="px-4 py-5 sm:px-6 text-center ">
        <h1 className='text-white  text-2xl  py-2 px-2 bg-sky-600 rounded-3xl'>المشاركات المجتمعية  </h1>
     </div>
      <div className="px-4 py-5 sm:p-6 ">
        <Swiper
    
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          // pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, // تغيير الصور كل 3 ثواني
            disableOnInteraction: false, // يستمر التشغيل التلقائي حتى بعد التفاعل
          }}
        >
          <SwiperSlide >
            <img
              src="img/logo.webp"
              alt="Slide 1"
              className="w-48 h-88 mx-auto rounded"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="img/logo.webp"
              alt="Slide 2"
              className="w-48 h-88 mx-auto rounded"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="img/logo.webp"
              alt="Slide 3"
              className="w-48 h-88 mx-auto rounded"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
