import { genSalt, hash } from "bcrypt";

export const hashPassword = async (password: string) => {
    const salt = await genSalt();
    const hashed = hash(password, salt);
    return hashed;
};