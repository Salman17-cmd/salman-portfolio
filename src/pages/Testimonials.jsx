// src/pages/Testimonials.jsx
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
//import "../css/testimonials.css"; // We'll create this

export default function Testimonials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonialsData = [
    {
      img: "/images/img1.jpg",
      name: "",
      job: "",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magni iure facere?",
      stars: 5,
    },
    {
      img: "/images/img1.jpg",
      name: "",
      job: "",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magni iure facere?",
      stars: 5,
    },
    {
      img: "/images/img1.jpg",
      name: "",
      job: "",
      text: "Torem ipsum dolor sit amet consectetur adipisicing elit. Iusto magni iure facere?",
      stars: 5,
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="title">What our Clients Say</h2>
        </div>

        <div className="testimonials-content">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              767: { slidesPerView: 2 },
            }}
            className="testimonials-slider"
          >
            {testimonialsData.map((item, index) => (
              <SwiperSlide key={index} className="testimonials-item">
                <div className="info">
                  <img src={item.img} alt="profile" />
                  <div className="text-box">
                    <h3 className="name">{item.name}</h3>
                    <span className="job">{item.job}</span>
                  </div>
                </div>

                <p>{item.text}</p>

                <div className="rating">
                  {Array(item.stars)
                    .fill(0)
                    .map((_, i) => (
                      <i key={i} className="fa fa-star"></i>
                    ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
