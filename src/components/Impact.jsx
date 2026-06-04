import * as CountUpModule from "react-countup";

const CountUp = CountUpModule.default.default;

import { useInView } from "react-intersection-observer";

function StatCard({ end, suffix, label }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#399144]">
        {inView ? (
          <CountUp
            start={0}
            end={end}
            duration={3}
          />
        ) : (
          0
        )}
        {suffix}
      </h2>

      <p className="mt-4 text-xl font-semibold text-gray-700 uppercase">
        {label}
      </p>
    </div>
  );
}

function Impact() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-20">
          OUR IMPACT
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">

          <StatCard
            end={20}
            suffix="+"
            label="Lakh Lives Impacted"
          />

          <StatCard
            end={2000}
            suffix="+"
            label="Villages Reached"
          />

          <StatCard
            end={400}
            suffix="+"
            label="Projects"
          />

          <StatCard
            end={27}
            suffix="+"
            label="States"
          />

        </div>

      </div>
    </section>
  );
}

export default Impact;