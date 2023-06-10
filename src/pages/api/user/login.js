import { loginUser } from "../../../../modules/user/user.service";
import validate from "../../../../lib/middleware/validation";
import Joi from "joi";
import createHandler from "../../../../lib/middleware/nextConnect";
import { withIronSessionApiRoute } from "iron-session/next";
import { ironConfig } from "../../../../lib/middleware/ironSession";

const loginSchema = Joi.object({
  userOrEmail: Joi.string().required().max(100),
  password: Joi.string().required(),
});

const login = createHandler();

login.post(validate({ body: loginSchema }), async (req, res) => {
  try {
    const user = await loginUser(req.body);
    req.session.user = {
      id: user._id,
      user: user.user,
    };
    await req.session.save();
    return res.send({ ok: true });
  } catch (error) {
    res.send({ error: error.message });
  }
});
export default withIronSessionApiRoute(login.handler(), ironConfig);
