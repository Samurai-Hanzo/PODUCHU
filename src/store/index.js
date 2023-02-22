import { configureStore } from "@reduxjs/toolkit";
import mentorsReducer from "./mentorsSlice";

export default configureStore({
  reducer: {
    mentors: mentorsReducer,
  },
});
