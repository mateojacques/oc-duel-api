import { ICreateUserBody } from "../interfaces/user";
import { throwBadRequestError, throwMissingParams } from "../utils/error";

export const validateCreateUserBody = (body: ICreateUserBody) => {
  const { name, email, username, password } = body;
  if (!name || !email || !username || !password)
    throwMissingParams({ name, email, username, password });
};

export const validateSignInBody = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  if (!email || !password) throwMissingParams({ email, password });
  if (typeof email !== "string" || typeof password !== "string")
    throwBadRequestError("Email or password have incorrect format.");
};
