import { ICreateJamBody } from "../interfaces/jam";
import { throwMissingParams } from "../utils/error";

export const validateCreateJamBody = (body: ICreateJamBody) => {
  const { creator_id, title, description, topic_id, start_date, end_date } =
    body;
  if (
    !creator_id ||
    !title ||
    !description ||
    !topic_id ||
    !start_date ||
    !end_date
  )
    throwMissingParams({
      creator_id,
      title,
      description,
      topic_id,
      start_date,
      end_date,
    });
};
