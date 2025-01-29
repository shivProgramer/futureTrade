import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../components/axiosInstance";

const initialState = {
  allDashboardData: [],
  allJoinPacakge: [],
  profileData: [],
  bankData: [],
  SupportAb_us_Term_Status: [],
  loading: false,
  error: null,
  access: [],
  singleDmeRoas: [],
};

export const getDataofDashboard = createAsyncThunk(
  "getDataofDashboard",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`dashboard?user_id=${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const getProfileData = createAsyncThunk(
  "getProfileData",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`profile?user_id=${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const getSupportAbout_usPrivacyTermStatusDatetimeProfileData =
  createAsyncThunk(
    "getSupportAbout_usPrivacyTermStatusDatetimeProfileData",
    async (id, thunkAPI) => {
      try {
        const response = await axiosInstance.get(`term`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }
    }
  );

export const getjoinPackage = createAsyncThunk(
  "getjoinPackage",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`product?type=${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const updateProfile = createAsyncThunk(
  "updateProfile",
  async ({ id, newData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        `/updateimg`,
        {
          user_id: id,
          img: newData.img,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

// bank details
export const getBankData = createAsyncThunk(
  "getBankData",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`get_bankdata?user_id=${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const BankCrteateBank = createAsyncThunk(
  "BankCrteateBank",
  async (newData, thunkAPI) => {
    try {
      const res = await axiosInstance.post("add_Bank", newData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

// join prodect
export const CreateJoinProdect = createAsyncThunk(
  "CreateJoinProdect",
  async (newData, thunkAPI) => {
    try {
      const res = await axiosInstance.post("join_project", newData);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const DashboardAndUser_slice = createSlice({
  name: "DashboardAndUser_slice",
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
      .addCase(getDataofDashboard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDataofDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.allDashboardData = action.payload;
      })
      .addCase(getDataofDashboard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getjoinPackage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getjoinPackage.fulfilled, (state, action) => {
        state.loading = false;
        state.allJoinPacakge = action.payload;
      })
      .addCase(getjoinPackage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getProfileData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfileData.fulfilled, (state, action) => {
        state.loading = false;
        state.profileData = action.payload;
      })
      .addCase(getProfileData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // --

      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profileData = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase(CreateJoinProdect.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(CreateJoinProdect.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(CreateJoinProdect.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(
        getSupportAbout_usPrivacyTermStatusDatetimeProfileData.pending,
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addCase(
        getSupportAbout_usPrivacyTermStatusDatetimeProfileData.fulfilled,
        (state, action) => {
          state.loading = false;
          state.SupportAb_us_Term_Status = action.payload;
        }
      )
      .addCase(
        getSupportAbout_usPrivacyTermStatusDatetimeProfileData.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )

      .addCase(getBankData.pending, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getBankData.fulfilled, (state, action) => {
        state.loading = false;
        state.bankData = action.payload;
      })
      .addCase(getBankData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(BankCrteateBank.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(BankCrteateBank.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(BankCrteateBank.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("reset", () => initialState);
  },
});

export default DashboardAndUser_slice.reducer;
export const { searchClient, acessModle } = DashboardAndUser_slice.actions;
