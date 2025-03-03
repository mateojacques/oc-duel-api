import { ICreateUser, IGetUserById } from "../interfaces/user";
import { createNewUserInDB, findUserById } from "../services/userService";
import { CREATED, OK } from "../utils/constants";
import { validateIdAsUuid } from "../validations/common";
import { validateCreateUserBody } from "../validations/user";

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
