import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import authService from "./authService";

const initialState = {
   isLoggedIn: false,
   user: null,
   users: [],
   isError: false,
   isSuccess: false,
   isLoading: false,
   message: "",
};

//register user
export const register = createAsyncThunk(
   "auth/register",
    async (userData, thunkAPI) => {
      try{
         return await authService.register(userData)
      }catch(error){
         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

         return thunkAPI.rejectWithValue(message)
      }
   }
)

//login user
export const login = createAsyncThunk(
   "auth/login",
    async (userData, thunkAPI) => {
      try{
         return await authService.login(userData)
      }catch(error){
         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

         return thunkAPI.rejectWithValue(message)
      }
   }
)


//logout user
export const logout = createAsyncThunk(
   "auth/logout",
    async (_, thunkAPI) => {
      try{
         return await authService.logout()
      }catch(error){
         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

         return thunkAPI.rejectWithValue(message)
      }
   }
)

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      RESET: (state) => {
         state.isError = false;
         state.isSuccess = false;
         state.isLoading = false;
         state.message = "";
      },
   },
   extraReducers: (builder) => {
      builder
         //register user
         .addCase(register.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isLoggedIn = true;
            state.user = action.payload;
            toast.success("Registration successfull");
            console.log(action.payload);
         })
         .addCase(register.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload);
         })

         //login user
         .addCase(login.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isLoggedIn = true;
            state.user = action.payload;
            toast.success("Login successfull");
            console.log(action.payload);
         })
         .addCase(login.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload);
         })

         //logout user
         .addCase(logout.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(logout.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isLoggedIn = false;
            state.user = null;
            toast.success(action.payload);
         })
         .addCase(logout.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload);
         })
   }
});

export const {RESET} = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn

export default authSlice.reducer;
