import { createSlice } from "@reduxjs/toolkit";
import {loadData, loadMagam} from '../action/subsciptionAction';
interface subscriptionState {
    isloding: false | true,
    data: Array<object>,
    magamData: Array<object>,
    error: any
}

const initialState : subscriptionState = { isloding: false, data: [], error: null, magamData:[]} 

const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => builder
        .addCase(loadData.pending, (state, action) => {
            state.isloding = true
        })
        .addCase(loadData.fulfilled, (state, action) => {
            state.data = action.payload
            state.isloding = false
        })
        .addCase(loadData.rejected, (state, action) => {
            state.error = action.payload;
        })
        .addCase(loadMagam.pending, (state, action) => {
            state.isloding = true
        })
        .addCase(loadMagam.fulfilled, (state, action) => {
            state.magamData = action.payload
            state.isloding = false
        })
        .addCase(loadMagam.rejected, (state, action) => {
            state.error = action.payload;
        })
})
export default subscriptionSlice;