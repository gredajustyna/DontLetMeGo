import {configureStore} from '@reduxjs/toolkit';
import {loadState} from './localStorage';
import {AppState} from './app.interface';
import {appReducer} from './app.slice';

const persistedState = loadState() as AppState;

export const store = configureStore({
  reducer: appReducer,
  preloadedState: persistedState,
});
