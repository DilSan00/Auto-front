import { createApi } from "@reduxjs/toolkit/query/react";
import { $baseQuery } from "./query";

export const $api = createApi({
  reducerPath: "http://localhost:3000/",
  baseQuery: $baseQuery,
  keepUnusedDataFor: 0,
  endpoints: () => ({}),
});
