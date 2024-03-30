import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const getToken = () => {
  const token = localStorage.getItem("userToken");
  return token ? token.trim().replace(/^"(.*)"$/, "$1") : null;
};


export const AllEmail = createAsyncThunk(
    "posts/AllEmail",
    async (id, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`);
        const data = await res.json();
     
       
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );


  export const AddEmail = createAsyncThunk(
    "AddEmail",
    async (formData, { rejectWithValue, getState }) => {
      try {
        const token = getToken(); // Get token from localStorage

        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/contact`,
          formData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        }
        ); 
       
        // const currentState = getState();
           
        return res.data;
      } catch (error) {
        // الاستثناءات الخاصة بالشبكة أو الخطأ العام
        return rejectWithValue("حدث خطأ: " + error.message);
      }
    }
  );
  export const deleteEmail = createAsyncThunk(
    "Email/deleteEmail",
    async (id, thunkAPI) => {
      try {
        const token = getToken();
        const response = await axios.delete(
          `${process.env.REACT_APP_API_URL}/api/contact/${id}`,
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
    Emails: null,
    loading: false,
    error: null,
  };



  
  const Email = createSlice({
    name: "Emails",
    initialState,
    reducers: {},
    

  extraReducers: (builder) => {
    builder
  
         .addCase(AllEmail.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(AllEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.Emails = action.payload;
      })
      .addCase(AllEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(AddEmail.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(AddEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.Services = action.payload;
      })
      .addCase(AddEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteEmail.pending, (state) => {
        state.loading = true;
      })
     .addCase(deleteEmail.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteEmail.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

    
    }});

    export default Email.reducer;