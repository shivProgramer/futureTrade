import React from "react";
import img from "../assets/asset 11.jpeg";
import { MdOutlineEmail } from "react-icons/md";
const AboutUs = () => {
  return (
    <div className="text-start text-sa  min-h-screen flex flex-col items-center mt-16 md:mt-24">
      <div className="w-full h-[300px] md:h-[350px] relative">
        {/* Background Image */}
        <img src={img} alt="About Us" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-start pl-8 md:pl-16 bg-black bg-opacity-40 text-white">
          <h3 className="text-3xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BB9532] text-shadow">
            About The Company
          </h3>
          <p className="text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-white to-[#3256bb]">
            <a href="/"> Home </a> . About The Company 
          </p>
          <p className="text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BB9532]"></p>
        </div>
      </div>

      <section className="about-area py-24 text-gray-500">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            {/* Left Column - Image */}
            <div className="lg:w-5/12 w-full mb-8 lg:mb-0">
              <div className="about-image">
                <img
                  src="https://vstechinfra.com/assets/images/about-1.jpg"
                  alt="About"
                  className="rounded-lg "
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:w-7/12 w-full">
              <div className="solution-content">
                <h2 className="text-3xl font-bold mb-4 text-shadow">About Us</h2>
                <p className="mb-4">
                  Welcome to{" "}
                  <span className="font-bold">
                    Future Services pvt ltd.
                  </span>
                  , a dynamic and forward-thinking company dedicated to driving
                  innovation and excellence in the infrastructure and technology
                  sectors. Founded with the vision of transforming the landscape
                  of modern infrastructure, we specialize in providing
                  comprehensive and cutting-edge solutions that meet the
                  evolving needs of businesses and industries across various
                  domains.
                </p>
                <p>
                  At Future Services , we believe in the power of technology to
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

          {/* Core Values */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-6 text-shadow">
              Our Core Values
            </h3>
            <p className="text-center mb-12 ">
              Join us on our journey as we continue to build the future, one
              project at a time. At Future Services pvt ltd., we’re not
              just constructing buildings and roads — we’re constructing a
              better tomorrow.
            </p>
            <div className="flex  justify-center gap-6 mt-10">
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
                  className="max-w-xs text-start bg-white rounded-lg p-2 transition-transform transform hover:scale-105"
                >
                  <img
                    src={value.img}
                    alt={value.title}
                    className="w-72 h-72 mx-auto mb-4"
                  />
                  <h4 className="text-xl font-medium mb-2">{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="Newsletter mb-10 py-16">
        <div className="container mx-auto px-4">
          <div className="single-footer-widget">
            <div className="row grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="w-full">
                <h2 className="text-4xl font-medium text-[#DEB271] text-shadow">
                  Newsletter
                </h2>
                <p className="mt-4 text-gray-500">
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
                      className="form-control form-control-lg w-full sm:flex-grow p-3.5 rounded-lg border border-[#DEB271] focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Email Address"
                      name="EMAIL"
                      required
                      autoComplete="off"
                    />
                    <button
                      type="submit"
                      className="btn btn-dark bg-[#DEB271] text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition"
                    >
                      <MdOutlineEmail size={35} />
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
