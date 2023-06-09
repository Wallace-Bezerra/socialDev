import byscrypt from "bcryptjs";

export const hashPassword = (password) => {
  return byscrypt.hashSync(password);
};
export const comparePassword = (password, hash) => {
  return byscrypt.compareSync(password, hash);
};
