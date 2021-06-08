import { request } from "express";

export const handler = async (event: any = {}): Promise<any> => {
  console.log(request);

  return { statusCode: 201, body: {} };
};
