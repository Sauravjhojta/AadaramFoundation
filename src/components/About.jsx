import logo from "../assets/logo.jpeg";
import { useState, useEffect } from "react";
import * as CountUpModule from "react-countup";
import { useInView } from "react-intersection-observer";

const CountUp = CountUpModule.default.default;

function StatCard({ end, suffix, label }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const [countKey, setCountKey] = useState(0);

  useEffect(() => {
    if (inView) {
      setCountKey((prev) => prev + 1);
    }
  }, [inView]);

  return (
     <div ref={ref} className="text-center">
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14532d]">
        {inView && (
          <CountUp
            key={countKey}
            start={0}
            end={end}
            duration={3}
          />
        )}
        {suffix}
      </h3>

      <p className="text-sm md:text-base text-gray-600 mt-2">
        {label}
      </p>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-white py-16 md:py-24 overflow-hidden">

      {/* Watermark Logo */}
      <img
        src={logo}
        alt=""
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[220px]
          md:w-[450px]
          lg:w-[700px]
          opacity-10
          pointer-events-none
          select-none
        "
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#14532d] mb-6 md:mb-8">
          Building A Greener Future For Nature And Animals
        </h2>

        <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
          Our NGO is committed to protecting the environment,
          promoting tree plantation, supporting animal welfare,
          and improving community well-being. We believe that
          every tree planted and every animal helped contributes
          to a healthier and more sustainable world.
        </p>

        <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-12 md:mb-16">
          Through plantation drives, animal rescue initiatives,
          healthcare support, environmental awareness campaigns,
          and volunteer programs, we strive to create lasting
          positive change for both people and nature.
        </p>

        {/* Animated Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-10">

  <StatCard
    end={200}
    suffix="+"
    label="Trees Planted"
  />

  <StatCard
    end={25}
    suffix="+"
    label="Animals Helped"
  />

  <StatCard
    end={70}
    suffix="+"
    label="Volunteers"
  />

</div>
        <button className="mt-10 md:mt-14 bg-[#14532d] hover:bg-[#166534] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition duration-300">
          Learn More
        </button>

      </div>

    </section>
  );
}

export default About;