import { apiSlice } from "../api/apiSlice";
import {
  ICommonPost,
  ICommonPostsResponse,
  ICommonTodosResponse,
} from "./interfaces/common-api.interface";

export const commonApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<ICommonTodosResponse["data"], void>({
      query: () => ({
        url: `/todos`,
      }),
      transformResponse: (response: ICommonTodosResponse["data"]) => {
        return response;
      },
      providesTags: ["Profile"],
    }),
    getPosts: builder.query<ICommonPost[], { page: number; pageSize: number }>({
      query: (params) => ({
        url: `/posts?_page=${params.page}&_limit=${params.pageSize}`,
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      // yang diperbarui cuman items, curent_page enggak
      merge: (currentCache, newItems, { arg }) => {
        let updatedCache;
        if (arg?.page === 1) {
          // If it's the first page, replace the entire cache with newItems
          updatedCache = newItems;
        } else {
          const mergedMap: { [key: string]: ICommonPost } = {};
          // Add items from the currentCache to the map
          for (const item of currentCache) {
            mergedMap[item.id] = item;
          }
          // Add items from the newItems to the map, avoiding duplicates
          for (const item of newItems) {
            if (!mergedMap[item.id]) {
              mergedMap[item.id] = item;
            }
          }
          // Convert the merged map back to an array
          updatedCache = Object.values(mergedMap);
        }

        return updatedCache; // Return the updated cache
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    postPosts: builder.mutation<any, { name?: string }>({
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
  overrideExisting: true,
});

export const { useGetTodosQuery, usePostPostsMutation, useGetPostsQuery } =
  commonApi;
