import { configureStore } from '@reduxjs/toolkit';
import authRreducer from"../features/authSlice";

export const store = configureStore({
  reducer: {
    auth:authRreducer
  },
});
