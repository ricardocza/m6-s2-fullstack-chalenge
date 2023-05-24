import { z } from "zod";
import { createContactSchema, createContactSchemaResponse } from "../shcemas/contact.schemas";

type ICreateContact = z.infer<typeof createContactSchema>
type ICreateContactResponse = z.infer<typeof createContactSchemaResponse>

export {ICreateContact, ICreateContactResponse}