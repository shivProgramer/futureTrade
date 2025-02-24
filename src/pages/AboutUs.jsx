
import React from "react";
import img from "../assets/asset 11.jpeg";
import about from "../assets/about_us.webp";
import { MdOutlineEmail } from "react-icons/md";

const AboutUs = () => {
  return (
    <div className="text-start min-h-screen flex flex-col items-center mt-16 md:mt-24">
      {/* Hero Section */}
      <div className="w-full h-[200px] sm:h-[250px] md:h-[350px] relative">
        {/* Background Image */}
        <img src={img} alt="About Us" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-start pl-4 sm:pl-8 md:pl-16 bg-black bg-opacity-40 text-white">
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#087ce8] text-shadow">
            About The Company
          </h3>
          <p className="text-sm sm:text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-white to-[#3256bb]">
            <a href="/"> Home </a> . About The Company
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="about-area py-12 sm:py-24 text-gray-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap">
            {/* Left Column - Image */}
            <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
              <div className="about-image">
                <img
                  src={about}
                  alt="About"
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="w-full lg:w-7/12">
              <div className="solution-content ml-0 sm:ml-4 md:ml-10">
                <h2 className="text-2xl sm:text-3xl text-[#284283] font-bold mb-4 text-shadow">
                  About Us
                </h2>
                <p className="mb-4 text-sm sm:text-base">
                  Welcome to{" "}
                  <span className="font-bold">
                    Meta Future Services Pvt Ltd.
                  </span>
                  , a dynamic and forward-thinking company dedicated to driving
                  innovation and excellence in the infrastructure and technology
                  sectors. Founded with the vision of transforming the landscape
                  of modern infrastructure, we specialize in providing
                  comprehensive and cutting-edge solutions that meet the
                  evolving needs of businesses and industries across various
                  domains.
                </p>
                <p className="text-sm sm:text-base">
                  At Future Services, we believe in the power of technology to
                  reshape the future. Our team is committed to delivering
                  high-quality, sustainable, and efficient infrastructure
                  development solutions, combining the best of engineering,
                  design, and project management expertise. With a focus on
                  long-term value and client satisfaction, we are known for
                  executing projects that are on-time, within budget, and
                  aligned with the highest industry standards.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mt-12 sm:mt-16">
            <h3 className="text-xl sm:text-2xl text-[#284283] font-semibold text-center mb-6 text-shadow">
              Our Core Values
            </h3>
            <p className="text-center mb-8 sm:mb-12 text-sm sm:text-base">
              Join us on our journey as we continue to build the future, one
              project at a time. At Meta Future Services Pvt Ltd., we’re not
              just constructing buildings and roads — we’re constructing a
              better tomorrow.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {/* Core Value Items */}
              {[
                {
                  img: "https://vstechinfra.com/assets/images/about/01.png",
                  title: "Innovation",
                  description:
                    "Embracing the latest advancements in technology to deliver creative and future-ready solutions.",
                },
                {
                  img: "https://vstechinfra.com/assets/images/about/02.png",
                  title: "Quality",
                  description:
                    "Ensuring the highest level of quality across all our projects, with a focus on durability and performance.",
                },
                {
                  img: "https://vstechinfra.com/assets/images/about/03.png",
                  title: "Sustainability",
                  description:
                    "Incorporating environmentally responsible practices to create lasting and positive impacts on the world.",
                },
                {
                  img: "https://vstechinfra.com/assets/images/about/04.png",
                  title: "Integrity",
                  description:
                    "Operating with transparency, honesty, and ethical practices in every project and interaction.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[45%] lg:w-[22%] bg-white rounded-lg p-4 transition-transform transform hover:scale-105"
                >
                  <img
                    src={value.img}
                    alt={value.title}
                    className="w-48 h-48 mx-auto mb-4"
                  />
                  <h4 className="text-lg sm:text-xl font-medium mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm sm:text-base">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="Newsletter mb-10 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="single-footer-widget">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="w-full">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#284283] text-shadow">
                  Newsletter
                </h2>
                <p className="mt-4 text-sm sm:text-base text-gray-500">
                  Sign up for our latest news and articles. We won’t give you
                  spam emails.
                </p>
              </div>
              {/* Right Content */}
              <div className="w-full">
                <div className="widget-newsletter">
                  <form
                    className="newsletter-form flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
                    data-bs-toggle="validator"
                  >
                    <input
                      type="email"
                      className="form-control form-control-lg w-full sm:flex-grow p-3 rounded-lg border border-[#284283] focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Email Address"
                      name="EMAIL"
                      required
                      autoComplete="off"
                    />
                    <button
                      type="submit"
                      className="btn btn-dark bg-[#284283] text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                    >
                      <MdOutlineEmail size={24} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;