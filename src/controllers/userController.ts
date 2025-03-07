import { compare } from "bcrypt";
import { ICreateUser, IGetUserById, ISignIn } from "../interfaces/user";
import {
  createNewUserInDB,
  findUserByEmail,
  findUserById,
} from "../services/userService";
import { CREATED, OK } from "../utils/constants";
import { validateIdAsUuid } from "../validations/common";
import {
  validateCreateUserBody,
  validateSignInBody,
} from "../validations/user";
import { throwInvalidEmailOrPassword } from "../utils/error";
import jwt from "jsonwebtoken";
import config from "../config/config";

const { JWT_SECRET, JWT_EXPIRES_IN } = config;

export const getUserById = async ({ params: { userId } }: IGetUserById) => {
  validateIdAsUuid(userId);

  const user = await findUserById(userId);
  return { status: OK, data: user };
};

export const createUser = async ({ body }: ICreateUser) => {
  validateCreateUserBody(body);

  const user = await createNewUserInDB(body);
  return { status: CREATED, data: user };
};

export const signIn = async ({ body: { email, password } }: ISignIn) => {
  validateSignInBody({ email, password });

  const user = await findUserByEmail(email);
  const passwordsMatch = await compare(password, user.password);
  if (!passwordsMatch) throwInvalidEmailOrPassword();

  const token = jwt.sign({ ...user }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
  return { status: OK, data: { token, user } };
};
