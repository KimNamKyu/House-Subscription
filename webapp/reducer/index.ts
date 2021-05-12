import { combineReducers } from '@reduxjs/toolkit';
import subscriptionSlice from './subscriptionSlice';
import loginSlice from './loginSlice';

export default combineReducers({
    subscription: subscriptionSlice.reducer,
    header: loginSlice.reducer,
})