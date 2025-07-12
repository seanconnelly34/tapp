import { User } from "./types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error(
    "NEXT_PUBLIC_API_BASE_URL environment variable is not defined"
  );
}

/**
 * Fetch all users from the API
 */
export async function fetchUsers(): Promise<User[]> {
  const response = await fetch(`${API_BASE_URL}/users`);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Failed to fetch users: ${response.status} ${response.statusText}. ${errorText}`
    );
  }

  const users: User[] = await response.json();
  return users;
}

/**
 * Fetch a single user by ID
 */
export async function fetchUser(id: number): Promise<User> {
  const response = await fetch(`${API_BASE_URL}/users/${id}`);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Failed to fetch user ${id}: ${response.status} ${response.statusText}. ${errorText}`
    );
  }

  const user: User = await response.json();
  return user;
}
