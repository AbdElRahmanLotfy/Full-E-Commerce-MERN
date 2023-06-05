import { createReducer, createAction } from "@reduxjs/toolkit";

const loadSellerRequest = createAction("loadSellerRequest");
const LoadSellerSuccess = createAction("LoadSellerSuccess");
const LoadSellerFail = createAction("LoadSellerFail");
const clearErrors = createAction("clearErrors");

const initialState = { isLoading: true };

const sellerReducer = createReducer(
  initialState,

  (builder) =>
    builder
      .addCase(loadSellerRequest, (state) => {
        state.isLoading = true;
      })
      .addCase(LoadSellerSuccess, (state, action) => {
        state.isSeller = true;
        state.isLoading = false;
        state.seller = action.payload;
      })
      .addCase(LoadSellerFail, (state, action) => {
        state.isLoading = false;
        state.isSeller = false;
        state.error = action.payload;
      })
      .addCase(clearErrors, (state) => {
        state.error = null;
      })
);

export default sellerReducer;

// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   isLoading: true,
// };

// export const sellerReducer = createReducer(initialState, {
//   LoadSellerRequest: (state) => {
//     state.isLoading = true;
//   },
//   LoadSellerSuccess: (state, action) => {
//     state.isSeller = true;
//     state.isLoading = false;
//     state.seller = action.payload;
//   },
//   LoadSellerFail: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//     state.isSeller = false;
//   },
// });
