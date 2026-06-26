import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import axios from "axios";
import Imageslider from "./Imageslider";

const Main = () => {

  let [record, setrecord] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_API_PATH + "/api/banner")
      .then(res => res.json())
      .then(value => {
        console.log(value);
        setrecord(value.data)
      })
  }, [])

  return (
    <section>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {
          record && record.map(value =>
            <SwiperSlide>
              <Imageslider p1={value}></Imageslider>
            </SwiperSlide>
          )
        }



      </Swiper>
      <hr />
    </section>
  );
};

export default Main;

