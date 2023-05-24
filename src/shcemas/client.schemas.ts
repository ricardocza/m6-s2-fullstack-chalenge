import { z } from "zod";

const createClientSchema = z.object({
    name: z.string().max(50),
    email: z.string().max(100),
    phone: z.string().length(11),
    
})

const createClientSchemaResponse = createClientSchema.extend({
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable()
})

export {
    createClientSchema,
    createClientSchemaResponse
}