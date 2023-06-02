import { z } from "zod";
import { createUserSchema, createUserSchemaResponse, listUsersSchema, updateUserSchema } from "../shcemas/users.schemas";

type ICreateUser = z.infer<typeof createUserSchema>
type ICreateUserResponse = z.infer<typeof createUserSchemaResponse>
type IListUserResponse = z.infer<typeof listUsersSchema>
type IUpdateUser = z.infer<typeof updateUserSchema>


export {ICreateUser, ICreateUserResponse, IListUserResponse, IUpdateUser}