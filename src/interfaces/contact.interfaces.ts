import { z } from "zod";
import { 
    createContactSchema, 
    createContactSchemaResponse, 
    listAllContactsSchemaResponse, 
    listContactSchemaResponse 
} from "../shcemas/contact.schemas";

type ICreateContact = z.infer<typeof createContactSchema>
type ICreateContactResponse = z.infer<typeof createContactSchemaResponse>
type IListAllContactsResponse = z.infer<typeof listAllContactsSchemaResponse>
type IListContactResponse = z.infer<typeof listContactSchemaResponse>

export {
    ICreateContact, 
    ICreateContactResponse,
    IListAllContactsResponse,
    IListContactResponse
}