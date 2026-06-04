import { Mail, Phone, MapPin } from "lucide-react";

import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer id="contact" className="bg-[#0f172a] text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* NGO Info */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#7ED957]">
            Aadaram Foundation
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Working towards environmental conservation, animal welfare,
            community empowerment and sustainable development through meaningful
            action.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6">
            <a
              href="https://www.facebook.com/share/17qMoUqLxS/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7ED957] transition duration-300"
            >
              <FaFacebookF size={24} />
            </a>

            <a
              href="https://www.instagram.com/aadaram_foundation?igsh=aGtyM2UzYzI1bTV4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7ED957] transition duration-300"
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="https://x.com/aadaramngo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7ED957] transition duration-300"
            >
              <FaXTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#7ED957]">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li
              onClick={() => scrollToSection("home")}
              className="cursor-pointer hover:text-white transition"
            >
              Home
            </li>

            <li
              onClick={() => scrollToSection("about")}
              className="cursor-pointer hover:text-white transition"
            >
              About Us
            </li>

            <li
              onClick={() => scrollToSection("programmes")}
              className="cursor-pointer hover:text-white transition"
            >
              Programmes
            </li>

            <li
              onClick={() => scrollToSection("gallery")}
              className="cursor-pointer hover:text-white transition"
            >
              Gallery
            </li>

            <li
              onClick={() => scrollToSection("volunteer")}
              className="cursor-pointer hover:text-white transition"
            >
              Volunteer
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#7ED957]">
            Contact Us
          </h3>

          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <Mail size={18} />

              <a
                href="mailto:aadaramfoundation@gmail.com"
                className="hover:text-[#7ED957] transition"
              >
                aadaramfoundation@gmail.com
              </a>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} />
              <span>Himachal Pradesh, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Aadaram Foundation. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
