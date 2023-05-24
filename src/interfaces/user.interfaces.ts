import { z } from "zod";
import { createUserSchema, createUserSchemaResponse } from "../shcemas/users.schemas";

type ICreateUser = z.infer<typeof createUserSchema>
type ICreateUserResponse = z.infer<typeof createUserSchemaResponse>

export {ICreateUser, ICreateUserResponse}