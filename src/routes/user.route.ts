import { Router } from "express";
import { createUserController, readUserController } from "../controllers/user.controler";

const userRoute = Router()

userRoute.get("", readUserController)
userRoute.post("", createUserController)


export default userRoute