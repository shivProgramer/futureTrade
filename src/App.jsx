import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import Media from "./pages/Media";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import ComingSoon from "./components/ComingSoon";
import AdminPanel from "./pages/AdminPanel";
import ProtectedRoute from "./components/ProtectedRoute";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import INV_FUND from "./pages/INV_FUND";
import Wallet from "./pages/Wallet";
import PromotionPage from "./pages/PromotionPage";
import Profile from "./pages/Profile";
import BankDetails from "./pages/BankDetails";
import KYC_Verification from "./pages/KYC_Verification";
import Withdrawal from "./pages/Withdrawal";
import AddCash from "./pages/AddCash";
import TransactionHistory from "./pages/TransactionHistory";
import TeamsTree from "./pages/TreeTeam";
import Salary from "./components/Salary";
import AdminAboutUs from "./pages/AdminAboutUs";
import AdminTermConditions from "./pages/AdminTermConditions";
import Admin_Privacy from "./pages/Admin_Privacy";
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();
  const protectedRoutes = ["/admin", "/login"];
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isLoginRoute = location.pathname === "/login";

  return (
    <>
      {!isAdminRoute && !isLoginRoute && <Header />}

      <main className="flex-1">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/view_buy_project_here" element={<Projects />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/comming" element={<ComingSoon />} />
          {/* Admin Panel Route */}
          <Route
            path="/admin"
            element={<ProtectedRoute element={<AdminPanel />} />}
          >
            {/* Admin Panel Sub-routes */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="inv-fund" element={<INV_FUND />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="promotion" element={<PromotionPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="bank-details" element={<BankDetails />} />
            <Route path="kyc" element={<KYC_Verification />} />
            <Route path="withdrawal" element={<Withdrawal />} />
            <Route path="add-cash" element={<AddCash />} />
            <Route path="team-tree" element={<TeamsTree />} />
            <Route path="salary" element={<Salary />} />
            <Route path="aboutus" element={<AdminAboutUs />} />
            <Route path="privacy" element={<Admin_Privacy />} />
            <Route path="term_conditions" element={<AdminTermConditions />} />

            <Route
              path="transaction-history"
              element={<TransactionHistory />}
            />
          </Route>
        </Routes>
      </main>

      {!isAdminRoute && !isLoginRoute && <Footer />}
    </>
  );
}

export default App;
