import { $api } from "../../../shared/api/api";

export const carDetailsApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getAuto: build.query({
      query: ({ id }) => ({
        url: `/auto/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAutoQuery } = carDetailsApi;
