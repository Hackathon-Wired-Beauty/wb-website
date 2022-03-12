import { Env } from "../env";
import { getUser } from "../utils/getUser";

export interface ReportsResponse {
  id: number;
  json: string;
  user: number;
  createdAt: Date;
}

export interface ErrorReportsResponse {
  title: string;
  message: string;
}

export const getReports = async () => {
  try {
    const response = await fetch(`${Env.baseUrl}/reports`, {
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
