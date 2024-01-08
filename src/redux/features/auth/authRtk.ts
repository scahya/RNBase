// Rtk
import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    authCheckToken: builder.query<any, { token?: string }>({
      query: (param) => ({
        url: `/api/auth/check-token/${param.token}`,
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),
    authForgotPassword: builder.mutation({
      query: (body) => ({
        url: "/api/auth/forgot-password",
        method: "POST",
        body,
      }),
    }),
    authRegister: builder.mutation({
      query: (body) => ({
        url: "/api/auth/register",
        method: "POST",
        body,
      }),
    }),
    authLogin: builder.mutation({
      query: (body) => ({
        url: "/api/auth/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Profile"],
    }),
    authLoginGeust: builder.mutation({
      query: (body) => ({
        url: "/api/auth/login-guest",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Profile"],
    }),
    authSendEmail: builder.mutation<any, { token?: string }>({
      query: (body) => ({
        url: `/api/auth/send-email/${body.token}`,
        method: "POST",
        body,
      }),
    }),
    // authSendOTP: builder.mutation({
    //   query: (body) => ({
    //     url: "/api/v1/otp/send",
    //     method: "POST",
    //     body,
    //   }),
    // }),
    // authVerifyOTP: builder.mutation({
    //   query: (body) => ({
    //     url: "/api/v1/otp/verify",
    //     method: "POST",
    //     body,
    //   }),
    // }),
    authCreatePassword: builder.mutation<any, { token?: string; body: {} }>({
      query: (body) => ({
        url: `/api/auth/create-password/${body.token}`,
        method: "POST",
        body: body.body,
      }),
    }),
    authLogout: builder.mutation<any, void>({
      query: () => ({
        url: `/api/auth/logout`,
        method: "POST",
        // body: body,
      }),
    }),
    getCheckEmail: builder.query<any, { email: string }>({
      query: (param) => `/api/auth/check-email/${param.email}`,
      providesTags: ["Profile"],
      transformResponse: (response: any) => {
        return response;
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useAuthLoginMutation,
  useAuthForgotPasswordMutation,
  useAuthRegisterMutation,
  useAuthCreatePasswordMutation,
  useAuthLogoutMutation,
  useLazyGetCheckEmailQuery,
  useLazyAuthCheckTokenQuery,
  useAuthLoginGeustMutation,
  // useAuthSendOTPMutation,
  // useAuthVerifyOTPMutation,
} = authApi;
