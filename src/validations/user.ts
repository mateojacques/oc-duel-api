import { ICreateUserBody } from "../interfaces/user";
import { throwMissingParams } from "../utils/error";

export const validateCreateUserBody = (body: ICreateUserBody) => {
  const { name, email, username, password } = body;
  if (!name || !email || !username || !password)
    throwMissingParams({ name, email, username, password });
};
