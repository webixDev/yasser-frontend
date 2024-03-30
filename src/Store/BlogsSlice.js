import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const getToken = () => {
  const token = localStorage.getItem("userToken");
  return token ? token.trim().replace(/^"(.*)"$/, "$1") : null;
};

export const AllBlog = createAsyncThunk(
    "posts/AllBlog",
    async (page, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/BlogMe/?limit=6&page=${page}`);
        const data = await res.json();
     
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const oneBlog = createAsyncThunk(
    "posts/OneService",
    async (id, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/api/BlogMe/${id}`
        );
        const data = await res.json();

  
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
 
  export const AddBlog = createAsyncThunk(
    "AddBlog",
    async (AddBlog, { rejectWithValue, getState }) => {
      try {
        const token = getToken(); // Get token from localStorage

     
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/BlogMe`,
          AddBlog, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}
              `,
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

  export const EditBlog = createAsyncThunk(
    "EditBlog",
    async ({ id, formData }, { rejectWithValue }) => {
      try {
        const token = getToken(); // Get token from localStorage
        const res = await axios.put(
          `${process.env.REACT_APP_API_URL}/api/BlogMe/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        return res.data;
      } catch (error) {
        return rejectWithValue("حدث خطأ: " + error.message);
      }
    }
  );
  export const deleteBlog = createAsyncThunk(
    "Blog/deleteBlog",
    async (id, thunkAPI) => {
      try {
        const token = getToken(); 
        const response = await axios.delete(
          `${process.env.REACT_APP_API_URL}/api/BlogMe/${id}`,
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
    blogs: null,
    BlogOne: [],
    AddBlog: [],
    loading: false,
    error: null,
    page: 1, // الصفحة الحالية
    limit: 10, // حجم الصفحة
    Skip: 0, // إجمالي عدد العناصر
    totalDocumentsBlog:0
  };



  
  const BlogsSlice = createSlice({
    name: "Blogs",
    initialState,
    reducers: {},
    

  extraReducers: (builder) => {
    builder
  
        .addCase(AllBlog.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(AllBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
        state.page = action.payload.page;
        state.limit = action.payload.limit;
        state.Skip = action.payload.Skip;
        state.totalDocumentsBlog =  action.payload.totalDocuments;
   
      })
      .addCase(AllBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = false;

      })
      .addCase(oneBlog.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(oneBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.BlogOne = action.payload;
      })
      .addCase(oneBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(AddBlog.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(AddBlog.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(AddBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(EditBlog.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(EditBlog.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(EditBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = false;

      })
      .addCase(deleteBlog.pending, (state) => {
        state.loading = true;
      })
     .addCase(deleteBlog.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteBlog.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
    
    }});

    export default BlogsSlice.reducer;