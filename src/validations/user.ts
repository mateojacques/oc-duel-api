import { ICreateUserBody } from "../interfaces/user";
import { throwBadRequestError, throwMissingParams } from "../utils/error";
import { validate as isUUID } from "uuid";

export const validateUserId = (userId: string) => {
  if (!userId) throwMissingParams({ userId });
  if (!isUUID(userId))
    throwBadRequestError("The provided user id is not a valid UUID.");
};

export const validateCreateUserBody = (body: ICreateUserBody) => {
  const { name, email, username, password } = body;
  if (!name || !email || !username || !password)
    throwMissingParams({ name, email, username, password });
};
