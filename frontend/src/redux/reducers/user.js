import { createReducer, createAction } from "@reduxjs/toolkit";

const loadUserRequest = createAction("loadUserRequest");
const LoadUserSuccess = createAction("LoadUserSuccess");
const LoadUserFail = createAction("LoadUserFail");
const clearErrors = createAction("clearErrors");

const userReducer = createReducer(
  {
    initialState: {},
  },
  (builder) =>
    builder
      .addCase(loadUserRequest, (state) => {
        state.loading = true;
      })
      .addCase(LoadUserSuccess, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(LoadUserFail, (state, action) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(clearErrors, (state) => {
        state.error = null;
      })
);

export default userReducer;

// export const userReducer = createReducer(initialState, {
//   LoadUserRequest: (state) => {
//     state.loading = true;
//   },
//   LoadUserSuccess: (state, action) => {
//     state.isAuthenticated = true;
//     state.loading = false;
//     state.user = action.payload;
//   },
//   LoadUserFail: (state, action) => {
//     state.isAuthenticated = false;
//     state.loading = true;
//     state.error = action.payload;
//   },
//   clearErrors: (state) => {
//     state.error = null;
//   },
// });

// createAsyncThunk //
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { server } from "../../server";

// export const getUser = createAsyncThunk(
//   "/user",
//   async (user, { rejectWithValue, getState, dispatch }) => {
//     try {
//       const { data } = await axios.get(`${server}/user/getuser`, {
//         withCredentials: true,
//       });

//       return data;
//     } catch (err) {
//       console.log(err);

//       return rejectWithValue(err);
//     }
//   }
// );

// const userSlices = createSlice({
//   name: "user",
//   initialState: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getUser.pending, (state) => {
//         state.loading = true;
//         state.isAuthenticated = false;
//       })
//       .addCase(getUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action?.payload;
//         state.isAuthenticated = true;
//       })
//       .addCase(getUser.rejected, (state, action) => {
//         state.loading = false;
//         state.isAuthenticated = false;
//         state.error = action?.payload?.error;
//       });
//   },
// });

// export default userSlices.reducer;
