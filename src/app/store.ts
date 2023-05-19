import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import resumeSlice from '../features/resume/resumeSlice';

export const store = configureStore({
  reducer: {
    Resume: resumeSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
