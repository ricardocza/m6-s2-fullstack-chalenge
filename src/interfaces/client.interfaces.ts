import { z } from "zod"
import { createClientSchema, createClientSchemaResponse, listClientSchemaResponse } from "../shcemas/client.schemas"

type ICreateClient = z.infer<typeof createClientSchema>
type ICreateClientResponse = z.infer<typeof createClientSchemaResponse>
type IListClientResponse = z.infer<typeof listClientSchemaResponse>

export {ICreateClient, ICreateClientResponse, IListClientResponse}