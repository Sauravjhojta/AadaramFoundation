import {
  Trees,
  Leaf,
  HeartPulse,
  PawPrint,
  Users,
  BookOpen,
} from "lucide-react";

const programmes = [
  {
    icon: Trees,
    title: "Tree Plantation",
    desc: "Planting pine trees and native species across communities.",
  },
  {
    icon: Leaf,
    title: "Forest Restoration",
    desc: "Restoring degraded forests and protecting wildlife habitats.",
  },
  {
    icon: PawPrint,
    title: "Animal Welfare",
    desc: "Rescuing, feeding and caring for stray and injured animals.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Providing healthcare support, awareness camps and medical assistance.",
  },
  {
    icon: BookOpen,
    title: "Environmental Education",
    desc: "Educating students and communities about sustainability and conservation.",
  },
  {
    icon: Users,
    title: "Community Participation",
    desc: "Engaging volunteers in plantation and animal welfare initiatives.",
  },
];

function Programmes() {
  return (
    <section id="programmes" className="bg-[#f7faf7] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Section Heading */}
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-black text-[#14532d] mb-12 md:mb-20">
          OUR PROGRAMMES
        </h2>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-12">

          {programmes.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex gap-4 md:gap-6 p-4 md:p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300"
              >

                {/* Icon */}
                <div className="bg-[#dcfce7] p-3 md:p-4 rounded-full h-fit shrink-0">
                  <Icon
                    className="text-[#14532d] w-8 h-8 md:w-12 md:h-12"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#14532d] mb-2 md:mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Programmes;