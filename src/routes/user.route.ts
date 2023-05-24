import { Router } from "express";
import { createUserController, readUserController } from "../controllers/user.controler";
import validateBody from "../middlewares/validateBody.middleware";
import { createUserSchema } from "../shcemas/users.schemas";
import validateEmailMiddleware from "../middlewares/validateEmail.middleware";
import { User } from "../entities/user.entity";

const userRoute = Router()

userRoute.get("", readUserController)
userRoute.post("", validateBody(createUserSchema), validateEmailMiddleware(User), createUserController)


export default userRoute