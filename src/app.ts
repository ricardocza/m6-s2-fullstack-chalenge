import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./error";
import clientRoute from './routes/client.route'
import contactRoute from './routes/contact.route'

const app: Application = express()

app.use(express.json())

app.use("/clients", clientRoute)
app.use("/contacts", contactRoute)

app.use(handleErrors)

export default app