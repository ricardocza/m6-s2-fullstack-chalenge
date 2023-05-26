import { z } from "zod";
import { createContactSchemaResponse } from "./contact.schemas";

const createClientSchema = z.object({
    name: z.string().max(50),
    email: z.string().max(100),
    phone: z.string().length(11),
    
})

const createClientSchemaResponse = createClientSchema.extend({
    id: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
    contact: z.array(z.object({name: z.string(), email: z.string()})).nullish()
})


const listClientSchemaResponse = z.array(createClientSchemaResponse)

export {
    createClientSchema,
    createClientSchemaResponse,
    listClientSchemaResponse
}