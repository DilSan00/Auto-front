import { $api } from "../../../shared/api/api";

export const adminAddApi = $api.injectEndpoints({
  endpoints: (build) => ({
    addAutos: build.mutation({
      query: (body) => ({
        url: "/auto",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddAutosMutation } = adminAddApi;
