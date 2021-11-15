import express from "express";
import {
  home,
  trending,
  newStory,
  join,
  login,
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/trending", trending);
globalRouter.get("/new", newStory);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
