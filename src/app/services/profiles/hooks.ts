"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchUsers, fetchUser } from "./api";
import { User } from "./types";

/**
 * React Query hook to fetch all users
 */
export function useUsers() {
  return useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
    retryDelay: (attempt) => Math.min(attempt * 1000, 3000),
  });
}

/**
 * React Query hook to fetch a single user by ID
 */
export function useUser(id: number) {
  return useQuery<User, Error>({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
    retryDelay: (attempt) => Math.min(attempt * 1000, 3000),
    enabled: !!id, // Only run query if id is provided
  });
}
