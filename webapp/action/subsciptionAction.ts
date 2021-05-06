import { createAsyncThunk } from "@reduxjs/toolkit";
import exData from "../exData";

const delay = (time:number, value:any) => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

const loadData = createAsyncThunk('load/data', async (data, thunkAPI) => {
    return await delay(500, exData)
});

export default loadData;