import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI;
const databaseMiddleware = async (req, res, next) => {
  try {
    if (!global.mongoose) {
      global.mongoose = await mongoose.connect(MONGO_URI);
      console.log("conectado mongo");
    }
  } catch (error) {
    res.status(500).send("database error");
  }
  return next();
};

export default databaseMiddleware;
