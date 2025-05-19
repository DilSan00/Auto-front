import { $api } from "../../../shared/api/api";

export const signUpApi = $api.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (body) => ({
        url: "/auth/register/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = signUpApi;
