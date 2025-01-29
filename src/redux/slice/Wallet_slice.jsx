import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../components/axiosInstance";

const initialState = {
  transactionData: [],
  widthral: [],
  loading: false,
  error: null,
  access: [],
};

export const getTransactionHistory = createAsyncThunk(
  "getTransactionHistory",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        `transaction_history?user_id=${id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const Createpayin = createAsyncThunk(
  "Createpayin",
  async (newData, thunkAPI) => {
    try {
      const res = await axiosInstance.post("add_amount", newData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const withdrawal = createAsyncThunk(
  "withdrawal",
  async ({ user_id, amount, pass }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        `withdrawal?user_id=${user_id}&amount=${amount}&password=${pass}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const Wallet_slice = createSlice({
  name: "Wallet_slice",
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
      .addCase(getTransactionHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTransactionHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.transactionData = action.payload;
      })
      .addCase(getTransactionHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(withdrawal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(withdrawal.fulfilled, (state, action) => {
        state.loading = false;
        state.widthral = action.payload;
      })
      .addCase(withdrawal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase(Createpayin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(Createpayin.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(Createpayin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase("reset", () => initialState);
  },
});

export default Wallet_slice.reducer;
export const { searchClient, acessModle } = Wallet_slice.actions;
