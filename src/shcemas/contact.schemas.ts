import { z } from "zod"
import { createClientSchema } from "./client.schemas"

const createContactSchema = z.object({
    name: z.string().max(50),
    email: z.string().max(100),
    phone: z.string().length(11),
    
})

const createContactSchemaResponse = createContactSchema.extend({
    id: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),    
})

const updateContactSchema = createContactSchema.partial().refine(
    (data) => Object.keys(data).length > 0,
    {message: `At least one field is required: name, email, phone`}
)

const listAllContactsSchemaResponse = z.array(createContactSchema.extend({
    id: z.string()
}))

const listContactSchemaResponse = createContactSchema.extend({
    client: createClientSchema
})

export {
    createContactSchema, 
    createContactSchemaResponse,
    updateContactSchema,
    listContactSchemaResponse,
    listAllContactsSchemaResponse
}
