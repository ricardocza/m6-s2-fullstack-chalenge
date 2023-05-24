import { Router } from "express"
import { createClientController, listClientController } from "../controllers/client.controller"
import validateEmailMiddleware from "../middlewares/validateEmail.middleware"
import { Client } from "../entities/client.entity"
import validateBody from "../middlewares/validateBody.middleware"
import { createClientSchema } from "../shcemas/client.schemas"

const clientRoute = Router()

clientRoute.post("", validateBody(createClientSchema), validateEmailMiddleware(Client), createClientController)
clientRoute.get("", listClientController)

export default clientRoute