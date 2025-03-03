import { ICreateUser, IGetUserById } from "../interfaces/user";
import { createNewUserInDB, findUserById } from "../services/userService";
import { OK } from "../utils/constants";
import { validateCreateUserBody, validateUserId } from "../validations/user";

export const getUserById = async ({ params: { userId } }: IGetUserById) => {
  validateUserId(userId);

  const user = await findUserById(userId);
  return { status: OK, data: user };
};

export const createUser = async ({ body }: ICreateUser) => {
    validateCreateUserBody(body);
  
    const user = await createNewUserInDB(body);
    return { status: OK, data: user };
  };
