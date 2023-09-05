// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from '../Services/Features';

const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export default store;
