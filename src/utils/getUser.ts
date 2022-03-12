import { LoginResponse } from "../api/login";

export const getUser = (): LoginResponse | null => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
};
