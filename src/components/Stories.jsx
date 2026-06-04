import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCreative,
  Autoplay,


} from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/effect-creative";

import birdVideo from "../assets/videos/Bird_video_1.mp4";
import catVideo from "../assets/videos/cat_video_1.mp4";
import dogVideo1 from "../assets/videos/dog_video_1.mp4";
import dogVideo2 from "../assets/videos/dog_Video_2.mp4";
import dogVideo3 from "../assets/videos/dog_video_3.mp4";

function Stories() {
  const swiperRef = useRef(null);
  const videos = [
    {
      src: birdVideo,
      title: "Bird Rescue",
    },
    {
      src: catVideo,
      title: "Cat Care",
    },
    {
      src: dogVideo1,
      title: "Dog Rescue",
    },
    {
      src: dogVideo2,
      title: "Animal Welfare",
    },
    {
      src: dogVideo3,
      title: "Community Support",
    },
  ];

  return (
    <section id="gallery" className="bg-[#f7faf7] py-6 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-black text-[#14532d] mb-12">
          STORIES IN MOTION
        </h2>

        <div className="max-w-5xl mx-auto">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              const allVideos = swiper.el.querySelectorAll("video");

              allVideos.forEach((video) => {
                video.pause();
                video.currentTime = 0;
              });

              const activeVideo =
                swiper.slides[swiper.activeIndex].querySelector("video");

              activeVideo?.play();
            }}
            effect="creative"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            loop={true}
          
            autoPlay={false}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-120%", 0, -500],
                rotate: [0, 0, -15],
              },
              next: {
                shadow: true,
                translate: ["120%", 0, -500],
                rotate: [0, 0, 15],
              },
            }}
            modules={[EffectCreative, Autoplay]}
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <video
                    src={video.src}
                    className="w-full h-[250px] md:h-[450px] object-cover"
                    controls
                    autoPlay={false}
                    playsInline
                    muted
                    preload="metadata"
                    onEnded={() => {
                      swiperRef.current?.slideNext();
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Stories;
