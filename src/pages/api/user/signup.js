import { createRouter } from "next-connect";
import { signupUser } from "../../../../modules/user/user.service";
import validate from "../../../../lib/middleware/validation";
import Joi from "joi";

const postSchema = Joi.object({
  firstName: Joi.string().required().max(50),
  lastName: Joi.string().required().max(50),
  user: Joi.string().required().max(30),
  email: Joi.string().email().required().max(100),
  password: Joi.string().required().max(30).min(6),
});

const signup = createRouter();

signup.post(validate({ body: postSchema }), (req, res) => {
  signupUser(req.body);
  res.status(200).json({ teste: "Ok" });
});

export default signup.handler();
