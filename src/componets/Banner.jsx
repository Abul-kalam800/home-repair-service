import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

const Banner = () => {
  return (
  <>
   <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
   spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
   >
     <SwiperSlide>
     <div  className="hero  h-[550px]"
      style={{
        backgroundImage:
          "url(https://i.postimg.cc/5yDWJmK3/15667.jpg)"
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl">
          <h1 className="mb-5 text-2xl md:text-6xl font-bold">We are Professonal Woodmeker </h1>
          <p className="mb-5">
          We provide wood services and repair old home and house, Just a call and contact with us, We will solve your problem.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
      </div>
    </SwiperSlide>
    
     <SwiperSlide>

     <div className="hero  h-[550px]"
      style={{
        backgroundImage:
          "url(https://i.postimg.cc/VksKKtkZ/93673.jpg)"
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl">
          <h1 className="mb-5 text-2xl md:text-6xl font-bold">We are Professonal Designer  </h1>
          <p className="mb-5">
          We offer Best Desgin services for our client.Explore with us for best services.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
      </div>
    </SwiperSlide>

     <SwiperSlide>
      <div className="hero h-[550px]"
      style={{
        backgroundImage:
          "url(https://i.postimg.cc/Cx6sJ6td/young-cute-family-repairs-room.jpg)"
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl">
          <h1 className="mb-5 text-2xl md:text-6xl font-bold">We are Professonal Engennier </h1>
          <p className="mb-5">
            We provided our best service in Engeniier field, We used modern tecnolgy whice help us beeter for our Build house.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
      </div>
    </SwiperSlide>
   </Swiper>
   
  </>
  );
};

export default Banner;
