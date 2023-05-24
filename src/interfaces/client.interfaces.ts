import { z } from "zod"
import { createClientSchema, createClientSchemaResponse } from "../shcemas/client.schemas"

type ICreateClient = z.infer<typeof createClientSchema>
type ICreateClientResponse = z.infer<typeof createClientSchemaResponse>

export {ICreateClient, ICreateClientResponse}