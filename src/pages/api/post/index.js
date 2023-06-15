import createHandler from "../../../../lib/middleware/nextConnect";
import { withIronSessionApiRoute } from "iron-session/next";
import { ironConfig } from "../../../../lib/middleware/ironSession";
import validate from "../../../../lib/middleware/validation";
import { createPostSchema } from "../../../../modules/Post/postSchema";
import { createPost, getPosts } from "../../../../modules/Post/post.service";

const post = createHandler();

post.post(validate({ body: createPostSchema }), async (req, res) => {
  try {
    const user = req.session.user;
    console.log(user);
    if (!user) {
      return res.status(401).send({ error: "unauthenticated" });
    }
    const newPost = await createPost(req.body, user);
    return res.status(200).send({ message: "Created post" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

post.get(async (req, res) => {
  try {
    const user = req.session.user;
    if (!user) {
      return res.status(401).send({ error: "unauthenticated" });
    }
    const posts = await getPosts();
    res.send(posts);
  } catch (error) {
    console.log(error);
  }
});

export default withIronSessionApiRoute(post.handler(), ironConfig);
