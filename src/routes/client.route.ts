import { Router } from "express"
import { createClientController } from "../controllers/client.controller"

const clientRoute = Router()

clientRoute.post("", createClientController)

export default clientRoute