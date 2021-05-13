import { createAsyncThunk } from "@reduxjs/toolkit";
import _data from "../_data";
import { any } from "prop-types";

const delay = (time: number, value: any) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(value);
  }, time);
});

interface ValidationErrors {
  errorMessage: string;
}
interface User {
  email: string;
  password: string;
}

export const signin = createAsyncThunk<
  any,
  User,
  {rejectValue: ValidationErrors}
>('login', async (data, {rejectWithValue}) => {
  console.log(data)
  let myInfo = await delay(300, _data)
  return myInfo
});
