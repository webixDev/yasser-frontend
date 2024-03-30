import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const getToken = () => {
  const token = localStorage.getItem("userToken");
  return token ? token.trim().replace(/^"(.*)"$/, "$1") : null;
};
export const visitorsIp = createAsyncThunk(
  "analysis/fetchVisitorIp",
  async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Analysis/ip`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getvisitorsIp = createAsyncThunk(
  "analysis/fetchVisitorIp",
  async (page) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Analysis/getips/?limit=8&page=${page}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
export const IpDel = createAsyncThunk(
  "IpDel",
  async (id, thunkAPI) => {
    try {
      const token = getToken(); 
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/Analysis/ip/${id}`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}
            `,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
const initialState = {
  visitorips: null,
  loading: false, // Initialize loading state
  error: null,    // Initialize error state
  page: 1, // الصفحة الحالية
  limit: 10, // حجم الصفحة
  totalDocumentsIp:0
};

const AnalysisSlice = createSlice({
  name: "Analysis",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getvisitorsIp.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getvisitorsIp.fulfilled, (state, action) => {
        state.loading = false;
        state.visitorips = action.payload.visitorInfo;
        state.totalDocumentsIp = action.payload.totalDocuments;
        state.page = action.payload.page;
        state.limit = action.payload.limit;
      })
      .addCase(getvisitorsIp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Assuming you want to store the error message
      })
      .addCase(IpDel.pending, (state) => {
        state.loading = true;
      })
     .addCase(IpDel.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(IpDel.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
  },
});

export default AnalysisSlice.reducer;