import { createAsyncThunk } from "@reduxjs/toolkit";
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
  const crawlingData = await delay(500, exData)

  let filter = crawlingData.filter((item: any) => {
    let period = item.period.split(' ~ ')
    if (period[0] >= "2021-04-09" && period[1] <= "2021-05-20") {
      return item
    }
  })
  return filter
});

export const loadMagam = createAsyncThunk('load/magam', async (data, thunkAPI) => {
  const crawlingData = await delay(500, exData)
  
  let filter = crawlingData.filter((item: any) => {
    let period = item.period.split(' ~ ')
    if(dateChecker(period[0], period[1])){
      //청약기간이 있을때
      return item
    }else{
      //현재 날짜 기준 청약기간에 포함되지 않고 이후에 공고가 있을경우
      let day = getDay()
      if(day < period[0]){
        return item
      }
    }
  }).map((v:any, idx: any) => {
    let period = v.period.split(' ~ ')
    if(dateChecker(period[0], period[1])){
      return {...v, status: 1, key: idx}
    }else{
      return {...v, status: 2, key: idx}
    }
  })
  
  console.log(filter)
  return filter
});

export const loadDetailData = createAsyncThunk('load/detail', async (data, thunkAPI) => {
  const crawlingData = await delay(500, exData)
  return crawlingData.map((v:any, idx: any) => {
    let period = v.period.split(' ~ ')
    if(dateChecker(period[0], period[1])){
      return {...v, status: 1, key: idx}
    }else{
      let announcement = v.announcement
      let day = getDay()
      if(announcement < day){
        return {...v, status: 3, key: idx}
      }else{
        return {...v, status: 2, key: idx}
      }
    }
  })
});