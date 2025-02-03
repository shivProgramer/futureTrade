
import React, { useState } from "react";
import logo from "../assets/pic2.png";
import { useNavigate } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
import { useDispatch } from "react-redux";
import { loginApi } from "../redux/slice/Auth_slice";
import video from "../../src/assets/loginvideo.mp4";
import { showToast } from "../utils/Config";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  // Handle input changes dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { phone, password } = formData;
    if (!phone.trim()) {
      setError("User ID is required.");
      return false;
    }
    if (!password.trim()) {
      setError("Password is required.");
      return false;
    }
    setError("");
    return true;
  };


  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    try {
      const res = await dispatch(
        loginApi({
          newData: formData,
          navigate,
        })
      ).unwrap();
      console.log("res in client side", res);

      if (res) {
        setShowVideo(true);
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError(err?.error || "Login failed. Please try again.");
    }
  };

  const handleVideoEnd = () => {
    setShowVideo(false);
    navigate("/admin/dashboard");
    showToast("Login successful.", "success");
    localStorage.setItem("model" , true);
  };

  if (showVideo) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <video
          src={video}
          className="w-full h-full object-cover"
          autoPlay
          onEnded={handleVideoEnd}
        />
      </div>
    );
  }

  return (
    <section
      id="auth-login"
      className="flex justify-center items-center min-h-screen bg-gray-100"
    >
      <div className="w-full max-w-7xl px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Section - Login Form */}
            <div className="flex flex-col justify-center p-8 w-full md:w-1/2">
              <div className="mb-4 text-center">
                <Slide direction="down">
                  <img
                    src={logo}
                    alt="VS Logo"
                    className="w-1/3 mx-auto animate-bounce"
                  />
                </Slide>
              </div>
              <div className="mb-4 text-center text-sm text-gray-600">
                <Fade delay={200}>
                  <span className="uppercase">
                    Login with User ID & Password
                  </span>
                </Fade>
              </div>
              {error && (
                <Fade direction="left">
                  <div className="text-red-500 text-sm mb-4">{error}</div>
                </Fade>
              )}
              <form
                method="post"
                autoComplete="off"
                onSubmit={handleLogin}
                className="space-y-4"
              >
                <input type="hidden" name="ddtype" value="2" />
                <Fade direction="left" cascade damping={0.3}>
                  <div className="form-group">
                    <label className="text-sm font-semibold text-gray-700">
                      User ID
                    </label>
                    <input
                      type="text"
                      name="phone"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-sm font-semibold text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                </Fade>

                <Fade direction="up" delay={300}>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition transform hover:scale-105 duration-300"
                  >
                    Login
                    <i
                      id="icon-arrow"
                      className="bx bx-right-arrow-alt ml-2"
                    ></i>
                  </button>
                </Fade>
              </form>
            </div>
            {/* Right Section - Image */}
            <div className="hidden md:block w-1/2 text-center p-8">
              <Fade>
                <img
                  src="https://vstechinfra.com/application/libraries/soft_assets/app-assets/images/pages/login.png"
                  alt="VS TechInfra Image"
                  className="w-full h-full object-cover"
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
