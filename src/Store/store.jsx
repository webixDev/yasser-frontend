import { configureStore } from "@reduxjs/toolkit";

import LoginSlice from "./LoginSlice"
import Blogs from "./BlogsSlice";
import Services from "./ServicesSlice"
import Emails from "./EmailSlice"
import AnalysisSlice from "./AnalysisSlice";
const store = configureStore({
  reducer: 
  {
 
  LoginSlice,
  Blogs,
  Services,
  Emails,
  AnalysisSlice

  }
});

export default store;
