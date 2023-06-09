import { createRouter } from "next-connect";
import mongooseMiddleware from "./mongoose";

export default function createHandler() {
  return createRouter().use(mongooseMiddleware);
}
