"use client";

import React from "react";

// استيراد مكونات وإضافات Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// استيراد أنماط Swiper الأساسية وأنماط الـ Pagination والـ Navigation
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// بيانات البطاقات
const supportLinks = [
  {
    name: "تغذية الرجل",
    href: "/man",
    description: "تفاصيل خاصة بتغذية الرجل",
    image: "/img/manimage.webp",
  },
  {
    name: "تغذية المرأة",
    href: "/women",
    description: "تفاصيل خاصة بتغذية المرأة",
    image: "/img/womenimage.webp",
  },
  {
    name: "تغذية الطفل",
    href: "/child",
    description: "تفاصيل خاصة بتغذية الطفل",
    image: "/img/childimage.webp",
  },
  {
    name: "تغذية الحامل والمرضع",
    href: "/pregnant",
    description: "تفاصيل خاصة بتغذية الحامل والمرضع",
    image: "/img/womenpreimage.webp",
  },
  {
    name: "تغذية مرضى سكري الحمل",
    href: "/womenpregnant",
    description: "تفاصيل خاصة بتغذية مرضى سكري الحمل",
    image: "/img/womenpregnantdmimage.webp",
  },
  {
    name: "تغذية السكري",
    href: "/diabetic",
    description: "تفاصيل خاصة بتغذية مرضى السكري",
    image: "/img/dmimage.webp",
  },
  {
    name: "تغذية الرياضيين",
    href: "/athletes",
    description: "تفاصيل خاصة بتغذية الرياضيين",
    image: "/img/nutritionsport.webp",
  },
  {
    name: "تغذية الأمراض المزمنة",
    href: "/chronicDisease",
    description: "تفاصيل خاصة بتغذية أمراض الكلى",
    image: "/img/chronic_disease.webp",
  },
  {
    name: "تغذية الأورام",
    href: "/cancer",
    description: "تفاصيل خاصة بتغذية الأورام",
    image: "/img/cancer.webp",
  },
  {
    name: "تغذية كبار السن",
    href: "/elderly",
    description: "تفاصيل خاصة بتغذية كبار السن",
    image: "/img/elderlyy.webp",
  },
  {
    name: "تغذية مرضى السيلياك",
    href: "/celiac",
    description: "تفاصيل خاصة بتغذية مرضى السيلياك",
    image: "/img/celiacc.webp",
  },
  {
    name: "تغذية صيام رمضان",
    href: "/fasting",
    description: "تفاصيل خاصة بالتغذية أثناء الصيام",
    image: "/img/fastingg.webp",
  },
];

export default function Welcome() {
  return (
    <div dir="rtl" className="bg-white">
      {/* Header */}
      <div className="relative bg-white-800 pb-32">
        {/* زر دخول الإدمن ثابت في أعلى اليسار */}
        <div className="absolute top-6 left-6 sm:left-auto sm:right-6 z-20">
          {/* <Link
            href="/admin/login"
            className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-xl font-bold shadow transition"
          >
            دخول الإدمن
          </Link> */}
        </div>

        <div className="absolute inset-0">
          <img
            alt="logo"
            src="/img/logo.webp"
            className="size-full object-contain"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-4xl font-normal tracking-tight text-sky-500 md:text-5xl lg:text-6xl animate-slide-right mb-4 sm:mb-0 sm:mr-4">
            تجمع عسير الصحي
          </h1>
          <h1 className="text-4xl font-normal tracking-tight text-sky-500 md:text-5xl lg:text-2xl animate-slide-right">
            مسار التغذية العلاجية
          </h1>
        </div>
      </div>

      {/* قسم السلايدر (Carousel) */}
      <section
        aria-labelledby="contact-heading"
        className="relative z-10 mx-auto mb-1 -mt-32 max-w-7xl px-6 pb-2 lg:px-8"
      >
        <h2 id="contact-heading" className="sr-only">
          Contact us
        </h2>

        {/* استخدام Swiper لإنشاء Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="my-10"
        >
          {supportLinks.map((link, index) => (
            <SwiperSlide key={link.name}>
              <div
                className="flex flex-col rounded-3xl mb-12 overflow-hidden shadow-xl transition transform hover:shadow-2xl hover:-translate-y-2 animate-slide-left bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* الصورة أعلى البطاقة */}
                <div className="relative">
                  <img
                    src={link.image}
                    alt={link.name}
                    className="w-full h-40 object-contain"
                  />
                </div>

                {/* المحتوى النصي */}
                <div className="p-4 flex flex-col items-center justify-center text-center">
                  <h3 className="text-xl font-semibold text-sky-500">
                    {link.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {link.description}
                  </p>
                </div>

                {/* الزر في الأسفل */}
                <div className="bg-gray-50 px-4 py-3 text-center">
                  <a
                    href={link.href}
                    className="inline-block px-5 py-2 text-sm font-medium text-white  bg-sky-500  hover:bg-sky-600 rounded-3xl focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    للإطلاع
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* لتخصيص لون الأسهم (Navigation) و حجمها، وكذلك لون الـ Pagination */}
        <style jsx global>{`
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 26px;
            color: #0ea5e9;
          }
          .swiper-button-next:hover::after,
          .swiper-button-prev:hover::after {
            color: #0284c7;
          }
          .swiper-pagination-bullet {
            background: #0ea5e9;
            width: 10px;
            height: 10px;
            opacity: 0.7;
          }
          .swiper-pagination-bullet-active {
            background: #0284c7;
            opacity: 1;
          }
          .swiper-pagination {
            display: none !important;
          }
        `}</style>
      </section>
    </div>
  );
}
