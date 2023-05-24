import { Repository } from "typeorm";
import { ICreateContact, ICreateContactResponse } from "../interfaces/contact.interfaces";
import { Contact } from "../entities/contact.entity";
import { AppDataSource } from "../data-source";
import { createContactSchemaResponse } from "../shcemas/contact.schemas";
import { Client } from "../entities/client.entity";

const createContactService = async (data: ICreateContact, clientId: string): Promise<ICreateContactResponse> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)
    
    const clientInstance: Client | null = await clientRepository.findOneBy({id: clientId})
    const contactInstance: Contact = contactRepository.create({...data, client: clientInstance!})
    
    const savedContact: Contact = await contactRepository.save(contactInstance)

    return createContactSchemaResponse.parse(savedContact)
}

export {createContactService}