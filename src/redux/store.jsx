import { configureStore } from "@reduxjs/toolkit";
import Auth_slice from "./slice/Auth_slice";
import DashboardAndUser_slice from "./slice/DashboardAndUser_slice";
import EnvFund_slice from "./slice/EnvFund_slice";

const store = configureStore({
  reducer: {
    auth: Auth_slice,
    dashboard_profile: DashboardAndUser_slice,
    env_store: EnvFund_slice,
  },
});

export default store;
