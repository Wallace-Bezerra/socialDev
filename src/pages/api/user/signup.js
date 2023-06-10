import { signupUser } from "../../../../modules/user/user.service";
import validate from "../../../../lib/middleware/validation";
import Joi from "joi";
import createHandler from "../../../../lib/middleware/nextConnect";

const postSchema = Joi.object({
  firstName: Joi.string().required().max(50),
  lastName: Joi.string().required().max(50),
  user: Joi.string().required().max(30),
  email: Joi.string().email().required().max(100),
  password: Joi.string().required().max(30).min(6),
});

const signup = createHandler();

signup.post(validate({ body: postSchema }), async (req, res) => {
  try {
    const user = await signupUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    return res.send({ error: err.message });
  }
});

export default signup.handler();
