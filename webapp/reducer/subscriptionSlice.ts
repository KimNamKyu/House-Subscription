import { createSlice } from "@reduxjs/toolkit";
import loadData from '../action/subsciptionAction';
interface subscriptionState {
    isloding: false | true,
    data: Array<object>,
    error: any
}

const initialState : subscriptionState = { isloding: false, data: [], error: null} 

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
        }),
    
    
})
export default subscriptionSlice;