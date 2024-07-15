import {Food} from '../types/Food';
import {ReduxFood} from '../types/ReduxFood';
import {AppState} from './app.interface';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: AppState = {
  food: [],
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    addFood: (state: AppState, action: PayloadAction<ReduxFood>) => {
      state[action.payload.id] = action.payload;
    },
    deleteFood: (state: AppState, action: PayloadAction<Food>) => {
      delete state[action.payload.id];
    },
  },
});

export const appReducer = appSlice.reducer;
