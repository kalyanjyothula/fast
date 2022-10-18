import { createSlice } from "@reduxjs/toolkit";

const fast_user = JSON.parse(localStorage.getItem("fast_user"));
const initialState = {
  fastUser: fast_user ? fast_user : "",
  loading: false,
  restaurant: [],
  msg: "",
};

const mainPageReducer = createSlice({
  name: "mainPage",
  initialState: initialState,
  reducers: {
    fetchUserDetails(state) {
      return { ...state, loading: true, msg: "" };
    },
    fetchUserDetailsSuccess(state, { payload }) {
      return {
        ...state,
        loading: false,
        restaurant: [...payload],
        msg: "Success",
      };
    },
    fetchUserDetailsFail(state, { payload }) {
      return {
        ...state,
        loading: false,
        restaurant: [],
        msg: "Something Went Wrong !",
      };
    },
  },
});

export const {
  fetchUserDetails,
  fetchUserDetailsSuccess,
  fetchUserDetailsFail,
} = mainPageReducer.actions;

export const mainPageSelector = (state) => state.mainPage;

export default mainPageReducer.reducer;
