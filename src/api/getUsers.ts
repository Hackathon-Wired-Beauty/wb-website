import { Env } from "../env";
import { getUser } from "../utils/getUser";

export interface UsersResponse {
  id: number;
  uuid: string;
  firstname: string;
  lastname: string;
  email: string;
  role: "ADMIN" | "USER";
}

export interface ErrorRegisterResponse {
  title: string;
  message: string;
}

export const getUsers = async () => {
  try {
    const response = await fetch(`${Env.baseUrl}/users`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "x-auth": `${getUser()?.token}`,
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
