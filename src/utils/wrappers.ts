import { Request, Response } from "express";
import { INTERNAL_ERROR, PERMANENT_REDIRECT } from "../utils/constants";

const handleHttpError = (
  res: Response,
  {
    httpCode,
    extraInfo,
    frontCode,
    message,
    errors,
  }: {
    httpCode: number;
    extraInfo: string;
    frontCode: number;
    message: string;
    errors: any[];
  }
) =>
  res.status(httpCode).json({ error: message, extraInfo, frontCode, errors });

const requestHandler: any = async (
  req: Request,
  res: Response,
  handler: Function
) => {
  try {
    const { body, query, params, headers, url, files } = req;
    console.info(`Started request at: ${url}`, {
      query: JSON.stringify(query),
      params: JSON.stringify(params),
    });

    const searchQuery = url?.slice(1) || "";

    const { status, data } = await handler({
      body,
      query,
      params,
      headers,
      searchQuery,
      files,
    });
    const withStatus = res.status(status || 200);
    if (status === PERMANENT_REDIRECT) return res.redirect(data);

    return typeof data === "string"
      ? withStatus.send(data)
      : withStatus.json(data);
  } catch (error: any) {
    console.error(
      `[wrapper] Error:${
        error?.message || "INTERNAL_SERVER_ERROR"
      } [req.body]: ${JSON.stringify(req.body)}`
    );

    if (error.httpCode) return handleHttpError(res, error);
    return res
      .status(INTERNAL_ERROR)
      .json({ error: "Error", fullError: "INTERNAL_ERROR", message: error?.message || "" });
  }
};

export const routeHandler = 
  (handler: Function) =>
  async (req: Request, res: Response) => {
    return requestHandler(req, res, handler);
  };
