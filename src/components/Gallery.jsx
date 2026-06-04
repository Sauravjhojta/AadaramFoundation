import image1 from "../assets/image_1.webp";
import image2 from "../assets/image_2.webp";
import image3 from "../assets/image_3.webp";
import image4 from "../assets/image_4.webp";
import image5 from "../assets/image_5.webp";
import image6 from "../assets/image_6.webp";
import image7 from "../assets/image_7.webp";
import image8 from "../assets/image_8.webp";
import image9 from "../assets/image_9.webp";
import image10 from "../assets/image_10.webp";
import image11 from "../assets/image_11.webp";
import image12 from "../assets/image_12.webp";
import image13 from "../assets/image_13.webp";
import image14 from "../assets/image_14.webp";
import image15 from "../assets/image_15.webp";

const images = [
  image1, image2, image3, image4, image5,
  image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15,
];

function Gallery() {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-black text-[#14532d] mb-12">
          RESCUE GALLERY
        </h2>

        {/* Row 1 */}
        <div className="mb-6 overflow-hidden">
          <div className="flex gap-6 animate-marquee">
            {[...images, ...images].map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                loading="lazy"
                className="w-[250px] md:w-[350px] h-[180px] md:h-[250px] object-cover rounded-2xl shadow-lg shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-marquee-reverse">
            {[...[...images].reverse(), ...[...images].reverse()].map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                loading="lazy"
                className="w-[250px] md:w-[350px] h-[180px] md:h-[250px] object-cover rounded-2xl shadow-lg shrink-0"
              />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

export default Gallery;