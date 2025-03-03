import { ICreateJam, IGetJamById } from "../interfaces/jam";
import { createNewJamInDB, findJamById } from "../services/jamService";
import { CREATED, OK } from "../utils/constants";
import { validateIdAsUuid } from "../validations/common";
import { validateCreateJamBody } from "../validations/jam";

export const getJamById = async ({ params: { jamId } }: IGetJamById) => {
  validateIdAsUuid(jamId);

  const jam = await findJamById(jamId);
  return { status: OK, data: jam };
};

export const createJam = async ({ body }: ICreateJam) => {
  validateCreateJamBody(body);

  const createdJam = await createNewJamInDB(body);
  return { status: CREATED, data: createdJam };
};
