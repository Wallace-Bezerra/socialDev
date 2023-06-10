import { loginUser } from "../../../../modules/user/user.service";
import validate from "../../../../lib/middleware/validation";
import Joi from "joi";
import createHandler from "../../../../lib/middleware/nextConnect";

const loginSchema = Joi.object({
  userOrEmail: Joi.string().required().max(100),
  password: Joi.string().required(),
});

const login = createHandler();

login.post(validate({ body: loginSchema }), async (req, res) => {
  try {
    const user = await loginUser(req.body);
    return res.send(user);
  } catch (error) {
    res.send({ error: error.message });
  }
});
export default login.handler();
