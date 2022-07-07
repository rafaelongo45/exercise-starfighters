import { Router } from "express";
import { compareStars, getRanking } from "../Controllers/usersController.js";
import { getUserRepos } from "../Middlewares/usersMiddleware.js";
import { validateSchema } from "../Middlewares/validateSchema.js";
import usersSchema from "../Schemas/usersSchema.js";
import { compareUsers, getUserStarCount } from "../Services/usersService.js";

const userRouter = Router();

userRouter.post("/battle", validateSchema(usersSchema), getUserRepos, getUserStarCount, compareUsers, compareStars);
userRouter.get("/ranking", getRanking);

export default userRouter;