import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_PATH, CODE, PHONE, TOKEN } from "../constants";
import { toast } from "react-toastify";

const register = createAsyncThunk(`auth/register`, async (phone) => {
  const { data } = await axios.post(API_PATH + "/user/register/", { phone });
});

const phoneVerify = createAsyncThunk(
  `auth/register-confirm`,
  async (phone, verifyCode) => {
    const { data } = await axios.post(API_PATH + "/user/register-confirm/", {
      phone,
      code: localStorage.getItem(CODE),
    });
  }
);

const login = createAsyncThunk(
  `auth/login`,
  async ({ phone, password, navigate }) => {
    const { data } = await axios.post(API_PATH + "/user/login/", {
      phone,
      password,
    });
    toast("Ma");
    if (data.success) {
      navigate("/welcome-note");
    } else {
      toast.error("Ma'lumotlaringizni to'g'ri kiriting");
    }
  }
);

const password = createAsyncThunk(`auth/create-user`, async (password) => {
  const { data } = await axios.post(API_PATH + "/user/create-user/", {
    phone: localStorage.getItem(PHONE),
    code: localStorage.getItem(CODE),
    password,
  });
  localStorage.setItem(TOKEN, data.token);
});

const initialState = {
  token: localStorage.getItem(TOKEN) ? localStorage.getItem(TOKEN) : "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (bulder) => {
    // bulder.addCase(password.fulfilled, (state, action) => {
    // })
  },
});

export const authAction = {
  ...authSlice.actions,
  register,
  phoneVerify,
  password,
  login,
};

export default authSlice.reducer;
