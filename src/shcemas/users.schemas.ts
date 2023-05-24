import { z } from "zod"

const createUserSchema = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.string().email().max(100),    
    password: z.string().max(50),
  });

const createUserSchemaResponse = createUserSchema.extend({
    id: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
}).omit({password: true})

export {
    createUserSchema,
    createUserSchemaResponse
}