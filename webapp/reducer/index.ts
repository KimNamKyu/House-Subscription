import { combineReducers } from '@reduxjs/toolkit';
import subscriptionSlice from './subscriptionSlice';

export default combineReducers({
    subscription: subscriptionSlice.reducer,
})