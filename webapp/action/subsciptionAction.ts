import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import exData from "../exData";
import { getWeek, getDay, dateChecker } from "../util/getWeek";

const delay = (time: number, value: any) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(value);
  }, time);
});

export const loadData = createAsyncThunk('load/data', async (data, thunkAPI) => {
  const week = getWeek();
  let minWeek = week.shift();
  let maxWeek = week.pop();

  //   const res = await axios.get('_data.json')
  const { aptInfo }: any = await delay(500, exData)

  let filter = aptInfo.filter((item: any) => {
    let period = item.period.split(' ~ ')
    if (period[0] >= "2021-04-09" && period[1] <= "2021-05-20") {
      return item
    }
  })
  return filter
});

export const loadMagam = createAsyncThunk('load/magam', async (data, thunkAPI) => {
  const { aptInfo }: any = await delay(500, exData)

  let filter = aptInfo.filter((item: any) => {
    let period = item.period.split(' ~ ')
    if (dateChecker(period[0], period[1])) {
      //청약기간이 있을때
      return item
    } else {
      //현재 날짜 기준 청약기간에 포함되지 않고 이후에 공고가 있을경우
      let day = getDay()
      if (day < period[0]) {
        return item
      }
    }
  }).map((v: any, idx: any) => {
    let period = v.period.split(' ~ ')
    if (dateChecker(period[0], period[1])) {
      return { ...v, status: 1 }
    } else {
      return { ...v, status: 2 }
    }
  })
  return filter
});

export const loadDetailData = createAsyncThunk('load/detail', async (data, thunkAPI) => {
  const { aptInfo }: any = await delay(500, exData)
  return aptInfo.map((v: any, idx: any) => {
    let period = v.period.split(' ~ ')
    if (dateChecker(period[0], period[1])) {
      return { ...v, status: 1, key: idx }
    } else {
      let announcement = v.announcement
      let day = getDay()
      if (announcement < day) {
        return { ...v, status: 3 }
      } else {
        return { ...v, status: 2 }
      }
    }
  })
});

export const loadInfoDetail = createAsyncThunk(
  `load/Info`,
  async (data, thunkAPI) => {
    const { aptInfo }: any = await delay(500, exData)
    console.log(data)
    return []
  });