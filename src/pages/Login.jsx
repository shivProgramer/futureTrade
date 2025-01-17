import React from 'react'
import logo from "../assets/pic2.png"
const Login = () => {
  return (
    <section id="auth-login" className="flex justify-center items-center min-h-screen bg-gray-100 my-10">
    <div className="w-full max-w-7xl px-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Section - Login Form */}
          <div className="flex flex-col justify-center p-8 w-full md:w-1/2">
            <div className="text-center mb-8">
              <a href="https://vstechinfra.com/">
                <i className="bx bx-home text-xl text-gray-700"></i>
              </a>
            </div>
            <div className="mb-4 text-center">
              <a href="https://vstechinfra.com/">
                <img src={logo} alt="VS TechInfra Logo" className="w-1/3 mx-auto" />
              </a>
            </div>
            <div className="mb-4 text-center text-sm text-gray-600">
              <span className="uppercase">Login with User ID & Password</span>
            </div>
            <form action="https://vstechinfra.com/auth/login" method="post" autoComplete="off" className="space-y-4">
              <input type="hidden" name="ddtype" value="2" />
              <div className="form-group">
                <label className="text-sm font-semibold text-gray-700">User Id</label>
                <input
                  type="text"
                  name="txtlogin"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="form-group">
                <label className="text-sm font-semibold text-gray-700">Password</label>
                <input
                  type="password"
                  name="txtpwd"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="form-check-input" />
                  <label className="text-sm text-gray-600">Keep me logged in</label>
                </div>
                <div>
                  <a href="https://vstechinfra.com/auth/forgot_password" className="text-blue-500 text-sm hover:underline">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                Login
                <i id="icon-arrow" className="bx bx-right-arrow-alt ml-2"></i>
              </button>
            </form>
          </div>
          {/* Right Section - Image */}
          <div className="hidden md:block w-1/2 text-center p-8">
            <img
              src="https://vstechinfra.com/application/libraries/soft_assets/app-assets/images/pages/login.png"
              alt="VS TechInfra Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Login