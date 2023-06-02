import { Router } from "express";
import validateBody from "../middlewares/validateBody.middleware";
import { createContactSchema, updateContactSchema } from "../shcemas/contact.schemas";
import validateEmailMiddleware from "../middlewares/validateEmail.middleware";
import { Contact } from "../entities/contact.entity";
import { createContactController, deleteContactController, listAllContactsController, listContactController, updateContactController } from "../controllers/contact.controller";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";
import validateClientBelongsToUserMiddleware from "../middlewares/validateClientBelongsToUser.middleware";
import validateContactMiddleware from "../middlewares/validateContact.middleware";

const contactRoute = Router()

contactRoute.post(
    "/:id", 
    validateTokenMiddleware,
    validateBody(createContactSchema), 
    validateEmailMiddleware(Contact), 
    validateClientBelongsToUserMiddleware,   
    createContactController
    )
contactRoute.get(
    "", 
    validateTokenMiddleware, 
    listAllContactsController
)
contactRoute.get(
    "/:id/", 
    validateTokenMiddleware,
    validateContactMiddleware, 
    listContactController
)

contactRoute.patch(
    "/:id/", 
    validateTokenMiddleware,
    validateBody(updateContactSchema),
    validateContactMiddleware,
    validateEmailMiddleware(Contact),
    updateContactController
)

contactRoute.delete(
    "/:id/",
    validateTokenMiddleware,
    validateContactMiddleware,
    deleteContactController
)


export default contactRoute