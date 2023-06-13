import { signupUser } from "../../../../modules/user/user.service";
import validate from "../../../../lib/middleware/validation";
import Joi from "joi";
import createHandler from "../../../../lib/middleware/nextConnect";
import { withIronSessionApiRoute } from "iron-session/next";
import { ironConfig } from "../../../../lib/middleware/ironSession";
import { signupSchema } from "../../../../modules/user/userSchema";

const signup = createHandler();

signup.post(validate({ body: signupSchema }), async (req, res) => {
  try {
    const user = await signupUser(req.body);
    req.session.user = {
      id: user._id,
      user: user.user,
    };
    await req.session.save();

    res.status(201).json({ ok: true });
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      return res.status(404).send({
        code: 11000,
        duplicateKey: Object.keys(err.keyPattern)[0],
      });
    }
    return res.send({ error: err.message });
  }
});

export default withIronSessionApiRoute(signup.handler(), ironConfig);
