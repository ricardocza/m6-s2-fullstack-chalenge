import { Router } from "express";
import { createUserController, deleteUserController, readAllUsersController, readUserController, updateUserController } from "../controllers/user.controler";
import validateBody from "../middlewares/validateBody.middleware";
import { createUserSchema, updateUserSchema } from "../shcemas/users.schemas";
import validateEmailMiddleware from "../middlewares/validateEmail.middleware";
import { User } from "../entities/user.entity";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";

const userRoute = Router()

userRoute.get("", validateTokenMiddleware, readAllUsersController)
userRoute.get("/profile/", validateTokenMiddleware, readUserController)

userRoute.post(
    "", 
    validateBody(createUserSchema), 
    validateEmailMiddleware(User), 
    createUserController
)

userRoute.delete(
    "", 
    validateTokenMiddleware, 
    deleteUserController
)

userRoute.patch(
    "", 
    validateTokenMiddleware, 
    validateBody(updateUserSchema), 
    validateEmailMiddleware(User), 
    updateUserController
)



export default userRoute