import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../components/axiosInstance";

const initialState = {
  allEnvFund: [],
  loading: false,
  error: null,
  access: [],
  singleDmeRoas: [],
};

export const getEnvFund = createAsyncThunk(
  "getEnvFund",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`myProject?user_id=${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
const EnvFund_slice = createSlice({
  name: "EnvFund_slice",
  initialState,
  reducers: {
    searchClient: (state, action) => {
      state.searchData = action.payload;
    },
    acessModle: (state, action) => {
      state.access = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEnvFund.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEnvFund.fulfilled, (state, action) => {
        state.loading = false;
        state.allEnvFund = action.payload;
      })
      .addCase(getEnvFund.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      

      .addCase("reset", () => initialState);
  },
});

export default EnvFund_slice.reducer;
export const { searchClient, acessModle } = EnvFund_slice.actions;
