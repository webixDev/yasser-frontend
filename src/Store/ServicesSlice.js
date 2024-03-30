import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const getToken = () => {
  const token = localStorage.getItem("userToken");
  return token ? token.trim().replace(/^"(.*)"$/, "$1") : null;
};


export const AllServices = createAsyncThunk(
    "posts/AllServices",
    async (id, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/service`);
        const data = await res.json();
        // console.log(data);
        // console.log("ahmed");
        console.log(data);
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );


  export const AddService = createAsyncThunk(
    "AddService",
    async (AddService, { rejectWithValue, getState }) => {
      try {
        const token = getToken(); // Get token from localStorage

        console.log(token);
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/service`,
          AddService, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        }
        ); 
       
        console.log("نجاح: البيانات المستلمة", res.data);
        // const currentState = getState();
           
        return res.data;
      } catch (error) {
        // الاستثناءات الخاصة بالشبكة أو الخطأ العام
        console.log("حدث خطأ: ", error);
        return rejectWithValue("حدث خطأ: " + error.message);
      }
    }
  );
  export const EditService = createAsyncThunk(
    "EditService",
    async ({ id, formData }, { rejectWithValue }) => {
      try {
        const token = getToken(); // Get token from localStorage
        const res = await axios.patch(
          `${process.env.REACT_APP_API_URL}/api/service/${id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        console.log("نجاح: البيانات المعدلة", res.data);
        return res.data;
      } catch (error) {
        console.log("حدث خطأ: ", error);
        return rejectWithValue("حدث خطأ: " + error.message);
      }
    }
  );
  
  export const deleteService = createAsyncThunk(
    "Service/deleteService",
    async (id, thunkAPI) => {
      try {
        const token = getToken();
        console.log(token); 
        const response = await axios.delete(
          `${process.env.REACT_APP_API_URL}/api/service/${id}`,
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
    Services: null,
    AddService:[],
    loading: false,
    error: null,
  };



  
  const Services = createSlice({
    name: "Services",
    initialState,
    reducers: {},
    

  extraReducers: (builder) => {
    builder
  
         .addCase(AllServices.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(AllServices.fulfilled, (state, action) => {
        state.loading = false;
        state.Services = action.payload;
      })
      .addCase(AllServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(AddService.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(AddService.fulfilled, (state, action) => {
        state.loading = false;
     
      })
      .addCase(AddService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
       
        .addCase(EditService.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(EditService.fulfilled, (state, action) => {
        state.loading = false;
       console.log(action.payload);
      })
      .addCase(EditService.rejected, (state, action) => {
        state.loading = false;
        state.error = false;

      })
      .addCase(deleteService.pending, (state) => {
        state.loading = true;
      })
     .addCase(deleteService.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteService.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
    
    }});

    export default Services.reducer;