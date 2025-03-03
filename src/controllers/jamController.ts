import { ICreateJam, IGetJamById, IListJams } from "../interfaces/jam";
import { createNewJamInDB, findJamById, findJamsByFilter } from "../services/jamService";
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

export const listJams = async ({ query }: IListJams) => {
  const { topic_id, creator_id } = query;

  const jamList = await findJamsByFilter({ topic_id, creator_id });
  return { status: OK, data: jamList };
};
