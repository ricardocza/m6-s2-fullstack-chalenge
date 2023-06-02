import { Router } from "express"
import { createClientController, deleteClientController, listAllClientsController, listClientController, updateClientController } from "../controllers/client.controller"
import validateEmailMiddleware from "../middlewares/validateEmail.middleware"
import { Client } from "../entities/client.entity"
import validateBody from "../middlewares/validateBody.middleware"
import { createClientSchema, updateClientSchema } from "../shcemas/client.schemas"
import validateTokenMiddleware from "../middlewares/validateToken.middleware"
import validateClientBelongsToUserMiddleware from "../middlewares/validateClientBelongsToUser.middleware"

const clientRoute = Router()

clientRoute.post(
    "", 
    validateTokenMiddleware, 
    validateBody(createClientSchema), 
    validateEmailMiddleware(Client), 
    createClientController
)
    
clientRoute.get(
    "", 
    validateTokenMiddleware, 
    listAllClientsController
)
clientRoute.get(
    "/:id/", 
    validateTokenMiddleware, 
    listClientController
)

clientRoute.patch(
    "/:id/",
    validateTokenMiddleware,
    validateBody(updateClientSchema), 
    validateEmailMiddleware(Client),     
    validateClientBelongsToUserMiddleware, 
    updateClientController,
)

clientRoute.delete(
    "/:id/", 
    validateTokenMiddleware,    
    validateClientBelongsToUserMiddleware,
    deleteClientController
)

export default clientRoute