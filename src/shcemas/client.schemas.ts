import { z } from "zod";

const createClientSchema = z.object({
    name: z.string().max(50),
    email: z.string().max(100),
    phone: z.string().length(11),
    
})

const createClientSchemaResponse = createClientSchema.extend({
    id: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),    
    contact: z.array(
        z.object({
            name: z.string(),
            email: z.string(),
            phone: z.string()
        })).nullish()
})


const listAllClientsSchemaResponse = z.array(createClientSchema.extend({
    id: z.string()
}))


const updateClientSchema = createClientSchema.partial().refine(
    (data) => Object.keys(data).length > 0, 
    {message: `At least one field is required: name, email, phone`})

export {
    createClientSchema,
    createClientSchemaResponse,
    listAllClientsSchemaResponse,
    updateClientSchema    
}