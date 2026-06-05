import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import plantation1 from "../assets/plantation-1.jpeg";
import plantation2 from "../assets/plantation-2.jpeg";
import plantation3 from "../assets/plantation-3.jpeg";

function Hero() {
  return (
    <section id="home">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
         

          <div className="relative h-screen">

            <img
              src={plantation1}
              alt="Plantation Drive"
              className="w-full h-full object-cover"
            />

         <div className="absolute inset-0 bg-black/35">
  <div className="absolute bottom-6 right-4 md:bottom-4 md:right-4 lg:bottom-24 lg:right-28 text-right max-w-3xl">
                <h2
                  className="
                  text-white
                  font-black
                  uppercase
                  leading-none
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                "
                >
                  Building A Greener
                </h2>

                <h2
                  className="
                  text-[#7ED957]
                  font-black
                  uppercase
                  leading-none
                  mt-2
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                "
                >
                  Future For All
                </h2>

               <p className="mt-6 text-white/90 text-base md:text-xl max-w-2xl ml-auto">
  Join us in planting trees and restoring nature
  for a cleaner, healthier and sustainable future.
</p>

              </div>
            </div>

          </div>
          
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
           <div className="relative h-screen">

            <img
              src={plantation2}
              alt="Animal Welfare"
              className="w-full h-full object-cover"
            />

     <div className="absolute inset-0 bg-black/35">
  <div className="absolute top-30 left-8 md:top-28 lg:top-30 left-4 md:left-6 lg:left-8 max-w-3xl">
                <h2
                  className="
                  text-white
                  font-black
                  uppercase
                  leading-none
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                "
                >
                    Protecting Our
                </h2>

                <h2
                  className="
                  text-[#7ED957]
                  font-black
                  uppercase
                  leading-none
                  mt-2
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                "
                >
                  Natural Heritage
                </h2>

                <p className="mt-6 text-white/90 text-base md:text-xl max-w-xl">
 Conserving forests, preserving green spaces and inspiring
  communities to care for the environment.
</p>

              </div>
            </div>

          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-screen">

            <img
              src={plantation3}
              alt="Community Development"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/35">
  <div className="absolute top-20 md:top-28 left-2 md:left-6 lg:left-8 max-w-3xl">

                <h2
                  className="
                  text-white
                  font-black
                  uppercase
                  leading-none
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                "
                >
                  Empowering Communities
                </h2>

                <h2
                  className="
                  text-[#7ED957]
                  font-black
                  uppercase
                  leading-none
                  mt-2
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                "
                >
                  Through Green Action
                </h2>

                <p className="mt-6 text-white/90 text-base md:text-xl max-w-2xl">
                  Creating lasting impact through environmental
                  awareness, healthcare support and volunteer programs.
                </p>

              </div>
            </div>

          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
}

export default Hero;