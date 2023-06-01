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
}).omit({password: true})

const listUsersSchema = z.array(createUserSchemaResponse)

const updateUserSchema = createUserSchema.partial().refine(
    (data) => Object.keys(data).length > 0,
    {message: `At least one field is required: firstName, lastName, email`})

export {
    createUserSchema,
    createUserSchemaResponse,
    listUsersSchema,
    updateUserSchema
}