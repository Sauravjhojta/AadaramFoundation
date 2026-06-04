import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpeg";
import { toast } from "react-toastify";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  const handleDonateClick = () => {
  toast.warning(
  <div className="flex flex-col">
    <span>
      💛 Donations will be available soon.
    </span>

    <span>
      Contact us at:
      {" "}
      <a
        href="mailto:aadaramfoundation@gmail.com"
        className="underline font-semibold"
      >
        aadaramfoundation@gmail.com
      </a>
    </span>
  </div>,
  {
    autoClose: 7000,
  }
);
};

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md text-white">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-4">

        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 min-w-0 cursor-pointer"
        >
          <img
            src={logo}
            alt="NGO Logo"
            className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-green-400 object-cover"
          />

          <h1 className="text-lg md:text-2xl font-bold truncate">
            Aadaram Foundation
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">

          <li
            onClick={() => scrollToSection("home")}
            className="hover:text-green-400 cursor-pointer transition"
          >
            Home
          </li>

          <li
            onClick={() => scrollToSection("about")}
            className="hover:text-green-400 cursor-pointer transition"
          >
            About
          </li>

          <li
            onClick={() => scrollToSection("programmes")}
            className="hover:text-green-400 cursor-pointer transition"
          >
            Programmes
          </li>

          <li
            onClick={() => scrollToSection("gallery")}
            className="hover:text-green-400 cursor-pointer transition"
          >
            Gallery
          </li>

          <li
            onClick={() => scrollToSection("contact")}
            className="hover:text-green-400 cursor-pointer transition"
          >
            Contact
          </li>

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <button
  onClick={handleDonateClick}
  className="bg-green-500 hover:bg-green-600 px-3 md:px-5 py-2 rounded-full font-semibold text-sm md:text-base"
>
  Donate
</button>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="bg-black/90 backdrop-blur-md px-6 py-4 space-y-4 text-lg">

          <li
            onClick={() => scrollToSection("home")}
            className="hover:text-green-400 cursor-pointer"
          >
            Home
          </li>

          <li
            onClick={() => scrollToSection("about")}
            className="hover:text-green-400 cursor-pointer"
          >
            About
          </li>

          <li
            onClick={() => scrollToSection("programmes")}
            className="hover:text-green-400 cursor-pointer"
          >
            Programmes
          </li>

          <li
            onClick={() => scrollToSection("gallery")}
            className="hover:text-green-400 cursor-pointer"
          >
            Gallery
          </li>

          <li
            onClick={() => scrollToSection("contact")}
            className="hover:text-green-400 cursor-pointer"
          >
            Contact
          </li>

        </ul>
      </div>

    </nav>
  );
}

export default Navbar;