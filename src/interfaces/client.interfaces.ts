import { z } from "zod"
import { createClientSchema, createClientSchemaResponse, listAllClientsSchemaResponse, updateClientSchema } from "../shcemas/client.schemas"

type ICreateClient = z.infer<typeof createClientSchema>
type ICreateClientResponse = z.infer<typeof createClientSchemaResponse>
type IListClientResponse = z.infer<typeof listAllClientsSchemaResponse>
type IUpdateClient = z.infer<typeof updateClientSchema>

export {
    ICreateClient, 
    ICreateClientResponse, 
    IListClientResponse,
    IUpdateClient
}