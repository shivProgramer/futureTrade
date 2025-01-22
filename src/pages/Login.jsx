


import React, { useState } from "react";
import logo from "../assets/pic2.png";
import { useNavigate } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal"; 

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!userId || !password) {
      setError("Please fill in both fields.");
      return;
    }

    const user = { userId, password };

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLogin", "true");
    navigate("/admin/dashboard");
  };

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
                {/* Animated Logo */}
                <Slide direction="down">
                  <img src={logo} alt="VS Logo" className="w-1/3 mx-auto animate-bounce" />
                </Slide>
              </div>
              <div className="mb-4 text-center text-sm text-gray-600">
                <Fade delay={200}>
                  <span className="uppercase">Login with User ID & Password</span>
                </Fade>
              </div>
              {/* Show error message */}
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
                {/* Animated Input Boxes */}
                <Fade direction="left" cascade damping={0.3}>
                  <div className="form-group">
                    <label className="text-sm font-semibold text-gray-700">
                      User Id
                    </label>
                    <input
                      type="text"
                      name="txtlogin"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)} // Update state
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-sm font-semibold text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      name="txtpwd"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} // Update state
                    />
                  </div>
                </Fade>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="form-check-input" />
                    <label className="text-sm text-gray-600">
                      Keep me logged in
                    </label>
                  </div>
                  <div>
                    <a
                      href="https://vstechinfra.com/auth/forgot_password"
                      className="text-blue-500 text-sm hover:underline"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
                {/* Animated Button */}
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
