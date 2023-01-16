import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "dataApi",
    tagTypes: ["Data"],
    endpoints: (build) => ({
        getData: build.query({
            query: () => `general/data`,
            providesTags: ["Data"]
        }),
    })
})

export const { useGetDataQuery } = api;