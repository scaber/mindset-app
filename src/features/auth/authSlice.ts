import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
 import { RootState } from '../../app/store'
import { IUser } from '../../models/User'
import {  setUser } from '../../utils/helperFunctions'
import agent from '../../api/agent'
import { toast } from "react-toastify";

type AuthState = {
  user: IUser | null
   isAuthenticated: boolean
}
export const register:any = createAsyncThunk(
  "auth/register",
  async ({ email, firstName,lastName, password }:any,  thunkAPI) => {
    try {
      const response = await agent.Users.register(email, firstName,lastName, password);
      toast.info("Success registered");
       return response.data;
    } catch (error:any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
       return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

 
export const login:any = createAsyncThunk(
  "auth/login",
  async ({ username, password }:any, thunkAPI) => {
    try {
        const data = await agent.Users.login(username, password); 
      return { user: data };
    } catch (error:any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
       return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
 
const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, isAuthenticated: false } as AuthState,
  reducers: {
  
    logout: (state) => {
      state.user = null
       state.isAuthenticated = false
 
      setUser("");
    },

  }, 
  extraReducers: { 
    
     
    [register.rejected]: (state, action) => {
      state.isAuthenticated = false;
    },
    [login.rejected]: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
    }, 
  }
  
})

export const {  logout } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated
 