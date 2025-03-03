import { throwMissingParams, throwBadRequestError } from "../utils/error";
import { validate as isUUID } from "uuid";

export const validateIdAsUuid = (id: string) => {
  if (!id) throwMissingParams({ id });
  if (!isUUID(id))
    throwBadRequestError("The provided id is not a valid UUID.");
};
