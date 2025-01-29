import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../components/axiosInstance";

const initialState = {
  keydata: [],
  
  loading: false,
  error: null,
  access: [],
};

export const getKyc = createAsyncThunk("getKyc", async (id, thunkAPI) => {
  try {
    const response = await axiosInstance.get(`/get_kyc?user_id=${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export const KycUpdate = createAsyncThunk(
  "KycUpdate",
  async (newData, thunkAPI) => {
    try {
      const res = await axiosInstance.post("kyc", newData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const KyC_slice = createSlice({
  name: "KyC_slice",
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
      .addCase(getKyc.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getKyc.fulfilled, (state, action) => {
        state.loading = false;
        state.keydata = action.payload;
      })
      .addCase(getKyc.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(KycUpdate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(KycUpdate.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(KycUpdate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase("reset", () => initialState);
  },
});

export default KyC_slice.reducer;
export const { searchClient, acessModle } = KyC_slice.actions;
