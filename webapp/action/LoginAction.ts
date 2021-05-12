import { createAsyncThunk } from "@reduxjs/toolkit";

const delay = (time: number, value: any) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(value);
  }, time);
});

export const logedIn = createAsyncThunk('login', async (data, thunkAPI) => {
  return undefined
});
