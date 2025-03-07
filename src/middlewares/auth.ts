import { NextFunction, Response } from "express";
import { IHttpErrorInfo } from "../interfaces/error";
import { UNAUTHORIZED } from "../utils/constants";
import { HttpError } from "../utils/error";
import jwt from "jsonwebtoken";
import config from "../config/config";

const { JWT_SECRET } = config;

const isAuth = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { authorization: token } = req.headers;
    if (!token)
      throw new HttpError("Token is required.", {
        httpCode: UNAUTHORIZED,
      });

    const decoded = jwt.verify(token, JWT_SECRET);
    req.body.loggedUserInfo = decoded;
    next();
  } catch (error: any) {
    const {
      httpCode = UNAUTHORIZED,
      message = error?.message ? error.message: "Error while authenticating user.",
      expired
    } = error;

    const errorBaseInfo: IHttpErrorInfo = { error: message };

    if (expired) {
      errorBaseInfo.extraInfo = "498";
      errorBaseInfo.frontCode = 498;
    }

    res.status(httpCode).send(errorBaseInfo);
  }
};

export default isAuth;
