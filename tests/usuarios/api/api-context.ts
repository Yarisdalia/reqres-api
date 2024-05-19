import { request } from "@playwright/test";

export const apiContext = async () => {
  return await request.newContext({
    baseURL: "https://reqres.in/api/",
  });
};
