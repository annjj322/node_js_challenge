import express from "express";
import { users, profile, editProfile } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", users);
userRouter.get("/:id(\\d+)", profile);
userRouter.get("/edit-profile", editProfile);

export default userRouter;
