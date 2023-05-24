import { Router } from "express";
import validateBody from "../middlewares/validateBody.middleware";
import { createContactSchema } from "../shcemas/contact.schemas";
import validateEmailMiddleware from "../middlewares/validateEmail.middleware";
import { Contact } from "../entities/contact.entity";
import { createContactController, listContactController } from "../controllers/contact.controller";

const contactRoute = Router()

contactRoute.post("", validateBody(createContactSchema), validateEmailMiddleware(Contact), createContactController)
contactRoute.get("", listContactController)

export default contactRoute