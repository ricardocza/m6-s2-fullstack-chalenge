import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./error";
import clientRoute from './routes/client.route'
import contactRoute from './routes/contact.route'
import userRoute from "./routes/user.route";
import loginRoute from "./routes/login.route";

const app: Application = express()

app.use(express.json())

app.use("/user", userRoute)
app.use("/login", loginRoute)
app.use("/clients", clientRoute)
app.use("/contacts", contactRoute)

app.use(handleErrors)

export default app