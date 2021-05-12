import { createSlice } from "@reduxjs/toolkit";
import { logedIn } from "../action/LoginAction";
interface subscriptionState {
    isloged: false | true,
    data: object | undefined,
    error: any
}

const initialState : subscriptionState = { isloged: false, data: {}, error: null} 

const subscriptionSlice = createSlice({
    name: 'logedin',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => builder
        .addCase(logedIn.pending, (state, action) => {
            state.isloged = true
        })
        .addCase(logedIn.fulfilled, (state, action) => {
            state.data = action.payload
            state.isloged = false
        })
        .addCase(logedIn.rejected, (state, action) => {
            state.error = action.payload;
        })
})
export default subscriptionSlice;