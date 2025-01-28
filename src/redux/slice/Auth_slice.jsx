import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL, showToast } from "../../utils/Config";
const initialState = {
  isLoggedIn: false,
  token: null,
  loading: false,
  error: null,
};

// export const loginApi = createAsyncThunk(
//   "loginApi",
//   async ({ newData, navigate }, thunkAPI) => {
//     try {
//       const response = await axios.post(`${API_URL}loginViaPassword`, newData);

//       const { status, msg, data } = response?.data || {};

//       if (status === 200) {
//         localStorage.setItem("isLoggedIn", "true");
//         localStorage.setItem("userData", JSON.stringify(data));
        
//         return data;
//       } else {
//         // Handle unexpected status codes
//         const errorMsg = msg || "Login failed. Please try again.";
//         showToast(errorMsg, "error");
//         return thunkAPI.rejectWithValue({ error: errorMsg });
//       }
//     } catch (error) {
//       const errorMsg =
//         error.response?.data?.msg || "An error occurred. Please try again.";
//       showToast(errorMsg, "error");

//       // Reject the thunk with an error
//       return thunkAPI.rejectWithValue({ error: errorMsg });
//     }
//   }
// );

export const loginApi = createAsyncThunk(
  "loginApi",
  async ({ newData, navigate }, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}loginViaPassword`, newData);

      const { status, msg, data } = response?.data || {};

      if (status === 200) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userData", JSON.stringify(data));
        return data; // Success: return the user data
      } else {
        // Handle unexpected status codes
        const errorMsg = msg || "Login failed. Please try again.";
        showToast(errorMsg, "error");
        return thunkAPI.rejectWithValue({ error: errorMsg });
      }
    } catch (error) {
      const errorMsg =
        error.response?.data?.msg || "An error occurred. Please try again.";
      showToast(errorMsg, "error");

      // Reject the thunk with an error
      return thunkAPI.rejectWithValue({ error: errorMsg });
    }
  }
);

const Auth_slice = createSlice({
  name: "Auth_slice",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginApi.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
      })
      .addCase(loginApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export const { logout } = Auth_slice.actions;

export default Auth_slice.reducer;
