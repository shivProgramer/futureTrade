import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-4 overflow-y-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
