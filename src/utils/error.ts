import { IHttpErrorInfo } from "../interfaces/error";
import { INTERNAL_ERROR, BAD_REQUEST, NO_CONTENT } from "./constants";

export class HttpError extends Error {
  httpCode: number;
  extraInfo: string;
  frontCode?: number;
  errors: any[];

  constructor(message: string, optionalInfo: IHttpErrorInfo = {}) {
    super(message);

    const {
      httpCode = INTERNAL_ERROR,
      extraInfo = "",
      frontCode,
      errors,
    } = optionalInfo;

    this.httpCode = httpCode;
    this.extraInfo = extraInfo;
    this.frontCode = frontCode;
    this.errors = errors;

    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);
  }
}

export const throwBadRequestError = (message: string) => {
  throw new HttpError(message, {
    httpCode: BAD_REQUEST,
  });
};

export const throwMissingParams = (requiredParams: any) => {
  const missingParams = Object.keys(requiredParams).filter(
    (field) => !requiredParams[field]
  );
  throw new HttpError(
    `Faltan los siguientes parámetros o contienen errores: ${missingParams.join(
      ", "
    )}.`,
    { httpCode: BAD_REQUEST }
  );
};

export const throwNoContentError = (message: string) => {
    throw new HttpError(message, {
        httpCode: NO_CONTENT
    })
}
