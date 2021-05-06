import { createSlice } from "@reduxjs/toolkit";

interface subscriptionState {
    value: number
}

const initialState = {value:0} as subscriptionState

const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState,
    reducers: {
        increment(state) {
            state.value++
        }
    }
})

export const { increment } = subscriptionSlice.actions
export default subscriptionSlice.reducer