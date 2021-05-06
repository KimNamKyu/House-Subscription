import { combineReducers, configureStore} from '@reduxjs/toolkit';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import reducer from '../reducer';

export type RootState = ReturnType<typeof reducer>;

const store: MakeStore<RootState> = () => configureStore({ reducer });
export const wrapper = createWrapper<RootState>(store, {debug: true})



