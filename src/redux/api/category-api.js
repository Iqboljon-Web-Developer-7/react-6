import { api } from "./index";

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: (params) => ({
        url: "/users",
        params,
      }),
      providesTags: ["Users"],
    }),
    getLimitedUsers: build.query({
      query: ({ limit, page }) => ({
        url: `/users?limit=${limit}&page=${page}`,
      }),
      providesTags: ["Users"],
    }),
    createUser: build.mutation({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
    updateUser: build.mutation({
      query: ({ id, body }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

// GET -> build.query
// POST, PUT, PATCH, DELETE -> build.mutation

export const {
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetLimitedUsersQuery,
} = categoryApi;
