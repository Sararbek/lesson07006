import { mainApi } from "./Index"

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: "POST",
        body
      }),
      invalidatesTags: ['User']
    }),
    profile: build.query({
        query: () => ({
            url: '/auth/me',
            method: "GET",
            headers:  {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }),
       providesTags: ['User']
    })
  }),
  overrideExisting: false,
})

export const { useLoginMutation, useProfileQuery } = extendedApi