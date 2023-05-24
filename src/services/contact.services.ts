import { Repository } from "typeorm";
import { ICreateContact, ICreateContactResponse } from "../interfaces/contact.interfaces";
import { Contact } from "../entities/contact.entity";
import { AppDataSource } from "../data-source";
import { createContactSchemaResponse } from "../shcemas/contact.schemas";

const createContactService = async (data: ICreateContact): Promise<ICreateContactResponse> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const contactInstance: Contact = contactRepository.create(data)
    const savedContact: Contact = await contactRepository.save(contactInstance)

    return createContactSchemaResponse.parse(savedContact)
}

export {createContactService}