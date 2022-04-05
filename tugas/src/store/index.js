import { configureStore } from "@reduxjs/toolkit";
import QueryReducer from "./slice";
// import queryReducer from "./query/reducer";

export default configureStore({
  reducer: {
    query: QueryReducer
  }
  // devTools: true
});