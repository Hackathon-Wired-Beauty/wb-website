import { Env } from "../env";
import { getUser } from "../utils/getUser";

export interface RegisterResponse {
  id: number;
  uuid: string;
  firstname: string;
  lastname: string;
  email: string;
  role: "ADMIN" | "USER";
  token: string;
  createdAt: Date;
  deletedAt: Date | null;
}

export interface ErrorRegisterResponse {
  title: string;
  message: string;
}

export const register = async (
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  passwordConfirm: string
) => {
  try {
    const response = await fetch(`${Env.baseUrl}/register`, {
      method: "post",
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
      }),

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
