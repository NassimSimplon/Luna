import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GET_FEATURES, URL } from '../Utils/ApiUrls';

export const postsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: URL }), // Replace with your API base URL
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => GET_FEATURES,
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;