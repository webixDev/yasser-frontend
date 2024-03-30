import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
    "auth/login",
    async (userData, { rejectWithValue }) => {
      try {
        const request = await axios.post(
          `${process.env.REACT_APP_API_URL}/user/login`,
          userData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }

            );
          // Assuming the token is returned in the response
           
           
            localStorage.setItem("userToken", JSON.stringify(request.data.accessToken));

        const res = await request.data;
        return res;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  // "https://api.starkit.tech/api/v1/auth/login/",

  // const userToken = localStorage.getItem("userToken")
  // ? localStorage.getItem("userToken")
  // : null;

  export const LoginSlice = createSlice({
    name: "auth",
    initialState: {
      userLogin: [],
      isLoading: false,
      userToken:JSON.parse(localStorage.getItem("userToken")) || null,
      error: false,
      isAuthenticated: false,
    },
  
    extraReducers: (builder) => {
      builder
        .addCase(login.pending, (state) => {
          state.isLoading = true;
          state.error = false;
        })
        .addCase(login.fulfilled, (state, action) => {
          state.isLoading = false;
          state.userToken = action.payload.accessToken;
          // state.isAuthenticated = true;
          // state.userLogin = state.isAuthenticated ? action.payload : null;
         
        })
        .addCase(login.rejected, (state) => {
          state.isLoading = false;
          state.error = true;
        });
    },
  });
  
  export default LoginSlice.reducer;