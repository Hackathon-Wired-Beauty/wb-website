import { Env } from "../env";
import { getUser } from "../utils/getUser";

export interface AddReportResponse {
  title: string;
  message: string;
}

export const addReport = async (user: number, json: string) => {
  try {
    const response = await fetch(`${Env.baseUrl}/add-report`, {
      method: "post",
      body: JSON.stringify({
        user: user,
        json: json,
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "x-auth": `${getUser()?.token}`,
      },
    });
    const jsonRes: AddReportResponse = await response.json();
    return jsonRes;
  } catch (error) {
    console.error(error);
  }
};
