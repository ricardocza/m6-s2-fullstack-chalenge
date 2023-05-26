import { Router } from "express";
import { loginController } from "../controllers/login.controller";
import validateBody from "../middlewares/validateBody.middleware";
import { loginSchema } from "../shcemas/login.schemas";

const loginRoute = Router()

loginRoute.post("", validateBody(loginSchema), loginController)

export default loginRoute