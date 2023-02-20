import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_MENTORS, API_REGISTER, API_LOGIN } from "../consts";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export const fetchMentors = createAsyncThunk(
  "mentors/fetchMentors",
  async function (_, { rejectWithValue }) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const { data } = await axios(
        `${API_MENTORS}${window.location.search}`,
        config
      );

      if (!data.ok) {
        throw new Error("server error :?");
      }

      console.log(data, "res");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const navigate = useNavigate;
export const createAcc = createAsyncThunk(
  "mentors/createAcc",
  async function ({ email, password, passwordConfirm }, { rejectWithValue }) {
    console.log("check create");
    try {
      let obj = {
        email,
        password,
        password_confirm: passwordConfirm,
      };
      const res = await axios.post(
        `${API_REGISTER}${window.location.search}`,
        obj
      );
      if (!res.ok) {
        throw new Error("server error :/ could not register");
      }
      navigate("/");
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const LoginAcc = createAsyncThunk(
  "mentors/Login acc",
  async function ({ email, password }, { rejectWithValue }) {
    console.log("check create");
    try {
      let obj = {
        email,
        password,
      };
      const res = await axios.post(
        `${API_LOGIN}${window.location.search}`,
        obj
      );

      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", email);
      console.log("log rabotaet");
      if (!res.ok) {
        throw new Error("server error :/ could not login");
      }

      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.state = "rejected";
  state.error = action.payload;
};

const mentorsSlice = createSlice({
  name: "products",
  initialState: {
    mentorsArr: [],
    status: null,
    error: null,
  },

  extraReducers: {
    [fetchMentors.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchMentors.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.mentorsArr = action.payload;
    },
    [fetchMentors.rejected]: setError,

    [createAcc.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [createAcc.fulfilled]: (state) => {
      state.status = "resolved";
    },
    [createAcc.rejected]: setError,
  },
});

export const {} = mentorsSlice.actions;
export default mentorsSlice.reducer;
