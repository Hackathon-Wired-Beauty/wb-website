import { Env } from "../env";

export interface LoginResponse {
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

export interface ErrorLoginResponse {
  title: string;
  message: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(`${Env.baseUrl}/login`, {
      method: "post",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
