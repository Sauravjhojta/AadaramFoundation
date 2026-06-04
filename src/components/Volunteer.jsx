
import { useState } from "react";
import { toast } from "react-toastify";
function Volunteer() {
 const [formData, setFormData] = useState({
  "Full Name": "",
  Email: "",
  "Phone Number": "",
  City: "",
  "Area of Interest": "Tree Plantation",
  Message: "",
});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Volunteer application submitted successfully!");
    // Reset form
    setFormData({
      "Full Name": "",
      "Email": "",
      "Phone Number": "",
      "City": "",
      "Area of Interest": ""
    });
  };

  return (
    <section id="contact" className="bg-[#f7faf7] py-12 md:py-20">
      <div className="max-w-4xl px-4 mx-auto">

        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#14532d]">
            Become A Volunteer
          </h2>

          <p className="text-gray-600 mt-4 text-base md:text-lg">
            Help us plant trees, rescue animals, organize awareness campaigns,
            and create a greener future.
          </p>

        </div>

        <form
  action="https://formsubmit.co/aadaramfoundation@gmail.com"
  method="POST"
  onSubmit={(e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (formData["Full Name"].trim().length < 3) {
      e.preventDefault();
      toast.error("Please enter a valid name");
      return;
    }

    if (!emailRegex.test(formData["Email"])) {
      e.preventDefault();
      toast.error("Please enter a valid email");
      return;
    }

    if (!phoneRegex.test(formData["Phone Number"])) {
      e.preventDefault();
      toast.error("Phone number must be exactly 10 digits");
      return;
    }

    if (formData["City"].trim().length < 2) {
      e.preventDefault();
      toast.error("Please enter a valid city");
      return;
    }

    toast.success("Application submitted successfully!");
  }}
  className="bg-white shadow-xl rounded-3xl p-6 md:p-8 space-y-6"
>

          {/* Hidden Fields */}
          <input
            type="hidden"
            name="_subject"
            value="New Volunteer Application - Aadaram Foundation"
          />

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-semibold">
                Full Name
              </label>

             <input
  name="Full Name"
  type="text"
  required
  value={formData["Full Name"]}
  onChange={handleChange}
  minLength={3}
  placeholder="Enter your name"
  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
/>
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Email Address
              </label>

              <input
  name="Email"
  type="email"
  required
  value={formData["Email"]}
  onChange={handleChange}
  placeholder="Enter your email"
  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
/>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-semibold">
                Phone Number
              </label>

              <input
  name="Phone Number"
  type="tel"
  required
  value={formData["Phone Number"]}
  onChange={handleChange}
  maxLength={10}
  pattern="[0-9]{10}"
  placeholder="Enter 10 digit phone number"
  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
/>
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                City
              </label>

             <input
  name="City"
  type="text"
  required
  value={formData["City"]}
  onChange={handleChange}
  placeholder="Enter city"
  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
/>
            </div>

          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Area of Interest
            </label>

           <select
  name="Area of Interest"
  value={formData["Area of Interest"]}
  onChange={handleChange}
  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
>
              <option>Tree Plantation</option>
              <option>Animal Welfare</option>
              <option>Healthcare Camps</option>
              <option>Environmental Awareness</option>
              <option>Community Service</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Why Do You Want To Volunteer?
            </label>

            <textarea
  name="Message"
  rows="5"
  required
  value={formData["Message"]}
  onChange={handleChange}
  placeholder="Tell us about yourself..."
  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
/>
          </div>

          <button
            type="submit"
            className="w-full bg-[#14532d] hover:bg-[#166534] text-white py-4 rounded-xl font-bold text-lg transition duration-300"
          >
            Submit Application
          </button>

        </form>

      </div>
    </section>
  );
}

export default Volunteer;