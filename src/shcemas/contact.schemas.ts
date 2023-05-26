import { z } from "zod"
import { createClientSchema } from "./client.schemas"

const createContactSchema = createClientSchema
const createContactSchemaResponse = createContactSchema.extend({
    id: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable()
})

export {
    createContactSchema, 
    createContactSchemaResponse
}
