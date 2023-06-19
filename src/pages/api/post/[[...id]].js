import createHandler from "../../../../lib/middleware/nextConnect";
import { withIronSessionApiRoute } from "iron-session/next";
import { ironConfig } from "../../../../lib/middleware/ironSession";
import validate from "../../../../lib/middleware/validation";
import {
  createPostSchema,
  deletePostSchema,
  updatePostSchema,
} from "../../../../modules/Post/postSchema";
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "../../../../modules/Post/post.service";

const post = createHandler();

post.post(validate({ body: createPostSchema }), async (req, res) => {
  try {
    const user = req.session.user;
    if (!user) {
      return res.status(401).send({ error: "unauthenticated" });
    }
    await createPost(req.body, user);
    return res.status(201).send({ message: "Created post" });
  } catch (error) {
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
    res.status(500).send({ error: error.message });
  }
});
post.delete(validate({ deletePostSchema }), async (req, res) => {
  try {
    const user = req.session.user;
    if (!user) {
      return res.status(401).send({ error: "unauthenticated" });
    }
    const { id } = req.query;
    await deletePost(id, user);
    res.status(200).send("Post Deleted");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
post.patch(validate(updatePostSchema), async (req, res) => {
  try {
    const user = req.session.user;
    if (!user) {
      return res.status(401).send({ error: "unauthenticated" });
    }
    const { id } = req.query;
    const updatedPost = await updatePost(req.body, id);
    console.log(updatedPost);
    if (updatedPost) {
      res.status(200).send("Updated Post");
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
  return;
});
export default withIronSessionApiRoute(post.handler(), ironConfig);
