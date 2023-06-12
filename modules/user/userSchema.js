import Joi from "joi";

export const signupSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .max(80)
    .message("Esse campo pode ter no máximo {{#limit}} caracteres. "),
  lastName: Joi.string()
    .required()
    .max(50)
    .message("Esse campo pode ter no máximo {{#limit}} caracteres. "),
  user: Joi.string()
    .required()
    .max(30)
    .message("Esse campo pode ter no máximo {{#limit}} caracteres. "),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .max(100)
    .message("Esse campo pode ter no máximo {{#limit}} caracteres. "),
  password: Joi.string()
    .required()
    .max(30)
    .message("A senha pode ter no máximo {{#limit}} caracteres. ")
    .min(6),
});
