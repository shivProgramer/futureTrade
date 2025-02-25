import React from "react";
import Carousel from "../components/Carousel";
import { MdOutlineEmail } from "react-icons/md";
import ourCompany from "../assets/pixelcut-export (9).jpg";
import ourIdentity from "../assets/our_identity.avif";
import infrastructure from "../assets/infrastructure.avif";
import technology from "../assets/technology.avif";
import projectManagement from "../assets/projectmanage.avif";

const Home = () => {
  return (
    <div className="text-center min-h-screen flex flex-col items-center mt-16 md:mt-24">
      {/* Carousel Component */}
      <Carousel />
      <section className="featured-area py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center aboutSection">
            <h2
              className="text-center mb-5 mt-3 text-[#284283] text-4xl font-bold uppercase wow animate__animated animate__bounceInRight"
              data-wow-delay="0.1s"
            >
              <span className="block text-4xl font-[500] text-shadow">
                Find, Buy
              </span>
              <span className="text-3xl font-medium">
                {" "}
                Innovative Design &amp; Luxury Living
              </span>
              <br />
              <span className="text-3xl font-medium">Own Your Dream Home</span>
            </h2>
            <p className="my-8 text-center text-gray-500 text-base px-4 md:px-20">
              <span className="font-bold">Meta Future Services pvt ltd</span> is
              a real estate company that brings a modern approach to property
              financing, leveraging the collective power of many investors.
              Traditionally, real estate investments were the domain of wealthy
              individuals or institutional investors. Crowdfunding democratizes
              this process, allowing anyone with an internet connection to
              invest smaller sums into property ventures.
            </p>
            <div
              className="w-full mt-8 md:w-1/2 px-4 wow animate__animated animate__zoomIn"
              data-wow-delay="0.2s"
            >
              <img
                src={ourCompany}
                alt="About Image"
                className="w-full rounded-lg transition-transform transform hover:scale-110 duration-300 ease-in-out"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mt-5 md:mt-0">
              <p className="text-2xl font-semibold text-[#284283] flex items-center">
                <img
                  src="https://vstechinfra.com/assets/images/icon/building.gif"
                  alt="Building Icon"
                  width="30px"
                  className="mr-2"
                />
                About Us
              </p>
              <p
                className="wow animate__animated animate__bounceInRight mt-4 text-base  text-start text-gray-500"
                data-wow-delay="0.2s"
              >
                At{" "}
                <span className="font-bold">Meta Future Services pvt ltd,</span>{" "}
                we are committed to crafting outstanding real estate
                experiences. Whether it's contemporary residential developments
                or cutting-edge commercial properties, our goal is to uphold
                excellence and trust in every project we undertake. With
                extensive industry expertise, we transform your vision of an
                ideal home or business space into reality. Like any investment,
                real estate carries certain risks. However, the global rise of
                real estate crowdfunding highlights its potential, blending
                technological advancements with traditional property investment.
                This innovative approach opens new opportunities for portfolio
                diversification and access to the expansive real estate market.
              </p>
              <p
                className="wow animate__animated animate__bounceInRight mt-4 text-base  text-start text-gray-500"
                data-wow-delay="0.2s"
              >
                As with any investment, there are risks. However, the worldwide
                embrace of real estate crowdfunding speaks to its potential,
                merging technological innovation with age-old property
                investing. This method provides an exciting avenue for
                diversifying portfolios and tapping into the vast world of real
                estate.
              </p>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
      </section>
      {/* ------- */}
      <section className="about-area py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center">
            <h2
              className="text-center mb-5 mt-3 text-[#284283] text-4xl font-bold uppercase wow animate__animated animate__bounceInRight"
              data-wow-delay="0.1s"
            >
              <span className="block text-4xl font-[500] text-shadow ">
                OUR VISION
              </span>
              <span className="text-3xl font-medium">
                Modern infrastructure tailored to your
              </span>
              <br />
              <span className="text-3xl font-medium"> business needs </span>
            </h2>
            <p className="my-8 text-center text-gray-500 text-base px-4 md:px-20">
              At <span className="font-bold">Meta Future Services pvt ltd</span>{" "}
              we take pride in crafting spaces that inspire and empower. With a
              legacy of trust and excellence, we specialize in delivering
              top-notch real estate solutions that cater to your lifestyle and
              business needs. From premium residences to iconic commercial hubs,
              we build more than properties—we build relationships.
            </p>

            <div className="w-full md:w-1/2 px-4 mt-3">
              <div className="solution-content">
                <p className="text-xl font-semibold text-[#284283] flex items-center">
                  <img
                    src="https://vstechinfra.com/assets/images/icon/building.gif"
                    alt="Building Icon"
                    width="30px"
                    className="mr-2 uppercase"
                  />
                  Our specialty
                </p>
                <p
                  className="wow animate__animated animate__bounceInRight mt-4 text-base  text-start text-gray-500"
                  data-wow-delay="0.2s"
                >
                  <span className="font-bold">
                    Meta Future Services pvt ltd
                  </span>{" "}
                  is building strong, connected communities while exceeding
                  expectations. Think of us as the glue that keeps the three key
                  parts of property management—owners, properties, and
                  residents—running seamlessly at the highest level.
                </p>

                <p
                  className="wow animate__animated animate__bounceInRight mt-4 text-base  text-start text-gray-500"
                  data-wow-delay="0.2s"
                >
                  <span className="font-bold">
                    Meta Future Services pvt ltd
                  </span>{" "}
                  is aware that the efficiency of solving tasks that face the
                  corporation directly depends on the professionalism and
                  motivation of our colleagues. Our team consists of highly
                  skilled specialists in finance and, particularly, the real
                  estate market; each of them has their unique understanding of
                  the market, and together they create an absolute mechanism,
                  which works ideally and is continuously perfected.
                </p>
              </div>
            </div>

            <div
              className="w-full md:w-1/2 px-4 wow animate__animated animate__zoomIn"
              data-wow-delay="0.1s"
            >
              <div className="about-image h-full">
                <img
                  src={ourIdentity}
                  alt="About the company"
                  className="w-full rounded-lg transition-transform transform hover:scale-110 duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------ */}
      <section className="choose-area pt-10">
        <div className="container mx-auto px-4">
          <div className="section-title wow animate__animated animate__bounceInLeft mb-10">
            <h3 className="mb-10 text-[#284283]">
              <span className="block text-4xl font-[400]  text-shadow">
                WHY CHOOSE US
              </span>
              <span className=" text-4xl font-[300]">
                We Believe In Innovative With Technology
              </span>
            </h3>
            <p className="my-2 text-center text-gray-500 text-base px-4 md:px-20">
              Collective Purchase: Pool resources with a community of investors
              to jointly acquire real estate.
            </p>
            <p className="my-2 text-center text-gray-500 text-base px-4 md:px-20">
              Dual Strategies: We focus on two main approaches: investing in
              properties at the construction stage, targeting returns upon
              selling, and purchasing profitable assets designed for leasing.
            </p>
          </div>

          {/* 🚀 FIXED GRID LAYOUT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 px-4 overflow-hidden">
            {[
              {
                icon: "flaticon-location",
                title: "Initial Consultation",
                description:
                  "Our initial consultation involves conducting meetings with expert real estate agents.",
              },
              {
                icon: "flaticon-key",
                title: "Property Search",
                description:
                  "We showcase exclusive properties and schedule home visits with expert guidance.",
              },
              {
                icon: "flaticon-key",
                title: "Property Inspection",
                description:
                  "We help you inspect properties and negotiate purchases effectively.",
              },
              {
                icon: "flaticon-sale",
                title: "Personalized Services",
                description:
                  "Our dedicated team ensures a hassle-free home-buying journey.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="choose-item shadow-2xl p-5 border-b-2 border-[#284183] 
            transition-all duration-300 hover:scale-105 hover:shadow-lg 
            active:scale-105 focus-within:scale-105"
                style={{
                  minHeight: "100%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden", // 🚀 Prevents unwanted scrollbars
                }}
              >
                <i className={`${item.icon} text-4xl mb-4 text-[#DEB271]`}></i>
                <h3 className="font-medium text-xl text-[#165b80]">
                  {item.title}
                </h3>
                <p className="text-base font-normal py-2 text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ---- */}
      <section className="facilities-area pt-24 pb-16 ">
        <div className="container mx-auto px-4">
          <div className="section-title text-center mb-8">
            <span className="text-[#284283] text-4xl uppercase font-[500] text-shadow">
              OUR SKU's
            </span>
            <p className="text-center mt-2 text-gray-500">
              Providing expert guidance to businesses and organizations to
              navigate the complexities of infrastructure and technology
              development.
            </p>
          </div>
          <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {/* Service 1 */}
            <div
              className="col-lg-4 col-sm-4 col-md-4 wow animate__animated animate__zoomIn bg-white shadow-lg rounded-lg p-6 transition-transform transform duration-300 hover:scale-105"
              data-wow-delay="0.4s"
            >
              <div className="single-facilities">
                <div className="image mb-4">
                  <img
                    src={infrastructure}
                    alt="Infrastructure Development"
                    className="w-full rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-medium text-[#165b80]">
                  Infrastructure Development
                </h3>
                <p className="mt-2 text-gray-500">
                  Planning, designing, and constructing state-of-the-art
                  infrastructure projects tailored to your needs.
                </p>
              </div>
            </div>
            {/* Service 2 */}
            <div
              className="col-lg-4 col-sm-4 col-md-4 wow animate__animated animate__zoomIn bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
              data-wow-delay="0.4s"
            >
              <div className="single-facilities">
                <div className="image mb-4">
                  <img
                    src={technology}
                    alt="Technology Integration"
                    className="w-full rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#165b80]">
                  Technology Integration
                </h3>
                <p className="mt-2 text-gray-500">
                  Implementing the latest technological solutions to optimize
                  operations and enhance efficiency.
                </p>
              </div>
            </div>
            {/* Service 3 */}
            <div
              className="col-lg-4 col-sm-4 col-md-4 wow animate__animated animate__zoomIn bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
              data-wow-delay="0.4s"
            >
              <div className="single-facilities">
                <div className="image mb-4">
                  <img
                    src={projectManagement}
                    alt="Project Management"
                    className="w-full rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#165b80]">
                  Project Management
                </h3>
                <p className="mt-2 text-gray-500">
                  End-to-end project management services, ensuring seamless
                  execution from concept to completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -------- */}
      <section className="Newsletter mb-10 py-16">
        <div className="container mx-auto px-4">
          <div className="single-footer-widget">
            <div className="row grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="w-full">
                <h2 className="text-4xl font-medium text-[#284283] text-shadow">
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
                      className="form-control form-control-lg w-full sm:flex-grow p-3.5 rounded-lg border border-[#284283] focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Email Address"
                      name="EMAIL"
                      required
                      autoComplete="off"
                    />
                    <button
                      type="submit"
                      className="btn btn-dark bg-[#284283] text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition"
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

export default Home;
