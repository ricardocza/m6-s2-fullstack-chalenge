import { Router } from "express";
import validateBody from "../middlewares/validateBody.middleware";
import { createContactSchema } from "../shcemas/contact.schemas";
import validateEmailMiddleware from "../middlewares/validateEmail.middleware";
import { Contact } from "../entities/contact.entity";
import { createContactController, listContactController } from "../controllers/contact.controller";
import validateIdMiddleware from "../middlewares/validateId.middleware";
import { Client } from "../entities/client.entity";
import validateIdAlreadyRegistered from "../middlewares/validateIdAlreadyRegistered.middleware";

const contactRoute = Router()

contactRoute.post(
    "/:id", 
    validateBody(createContactSchema), 
    validateEmailMiddleware(Contact), 
    validateIdMiddleware(Client),
    validateIdAlreadyRegistered,
    createContactController
    )
contactRoute.get("", listContactController)

export default contactRoute