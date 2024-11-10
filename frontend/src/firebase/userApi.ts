import { UserProfile } from "../types/types";
const API = import.meta.env.VITE_API_URL + "/users";
export const createUserProfile = async (
  userProfile: UserProfile,
  token: string
) => {
  const res = await fetch(`${API}/create-profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userProfile),
  });
  if (!res.ok) {
    throw new Error("Failed to create user profile");
  }
  return res;
};

export const getUserProfile = async (token: string) => {
  const res = await fetch(`${API}/user-profile`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  if (res.status === 404) {
    return null;
  }
  return res.json();
};
