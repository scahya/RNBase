import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../../app/store";
import Config from "react-native-config";

export const apiSlice = createApi({
  reducerPath: "api", // optional
  baseQuery: fetchBaseQuery({
    baseUrl: Config.BASE_URL,
    credentials: "include",
    prepareHeaders: async (headers, { getState }) => {
      const rootState = getState() as RootState;

      if (rootState.auth.auth_token.token) {
        headers.set(
          "Authorization",
          `Bearer ${rootState.auth.auth_token.token}`
        );
      }

      console.log("HEADERS", headers);
      return headers;
    },
    fetchFn: (...args) => {
      console.log("\n\n calling fetch with", ...args);
      return fetch(...args);
    },
  }),
  tagTypes: ["Profile", "Home", "Address", "Tiket"],
  endpoints: (builder) => ({}),
});
