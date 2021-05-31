import { createSlice } from "@reduxjs/toolkit";
import { signin } from "../action/LoginAction";
import Router from 'next/router';
interface userState {
    isloged: false | true,
    data: any,
    error: any
}

const initialState : userState = { isloged: false, data: {}, error: null} 

const loginSlice = createSlice({
    name: 'logedin',
    initialState,
    reducers: {
        logoutReducer: (state, action) => {
            state.data = action.payload
            Router.push('/')
        }
    },
    extraReducers: (builder) => builder
        // .addCase(signin.pending, (state, action) => {
        //     state.isloged = true
        // })
        .addCase(signin.fulfilled, (state, action) => {
            state.data = action.payload
            state.isloged = false
            Router.push('/')
        })
        .addCase(signin.rejected, (state, action) => {
            state.error = action.payload;
        })
})
export default loginSlice;
export const { reducer, actions } = loginSlice;
export const {logoutReducer} = actions;