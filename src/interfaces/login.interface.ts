import { z } from "zod";
import { loginSchema } from "../shcemas/login.schemas";

type ILogin = z.infer<typeof loginSchema>

export {ILogin}