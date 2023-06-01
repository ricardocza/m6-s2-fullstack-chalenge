import { Repository } from "typeorm";
import { 
    ICreateContact, 
    ICreateContactResponse, 
    IListAllContactsResponse, 
    IListContactResponse 
} from "../interfaces/contact.interfaces";
import { Contact } from "../entities/contact.entity";
import { AppDataSource } from "../data-source";
import { createContactSchemaResponse, listAllContactsSchemaResponse, listContactSchemaResponse } from "../shcemas/contact.schemas";

const createContactService = async (data: ICreateContact, clientId: string): Promise<ICreateContactResponse> => {
    
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const contactInstance: Contact = contactRepository.create({...data, client: {id: clientId}})
    const savedContact: Contact = await contactRepository.save(contactInstance)

    return createContactSchemaResponse.parse(savedContact)
}

const listContactService = async (contactId: string): Promise<IListContactResponse> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const contact: Contact | null = await contactRepository.findOne({relations: {client: true}, where: {id: contactId}})
    return listContactSchemaResponse.parse(contact)
}

const listAllContactsService = async (): Promise<IListAllContactsResponse> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const contacts: Contact[] = await contactRepository.find({relations: {client: true}})
    return listAllContactsSchemaResponse.parse(contacts)
}

const updateContactService = async (contactData: ICreateContact, contactId: string): Promise<ICreateContactResponse> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const contactInstance: Contact | null = await contactRepository.findOneBy({id: contactId})
    const updatedContact: Contact = contactRepository.create({...contactInstance, ...contactData})
    contactRepository.save(updatedContact)

    return createContactSchemaResponse.parse(updatedContact)
}

const deleteContactService = async (contactId: string): Promise<void> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const contactInstance: Contact | null = await contactRepository.findOneBy({id: contactId})
    contactRepository.remove(contactInstance!)
}

export {
    createContactService, 
    listContactService,
    listAllContactsService,
    updateContactService,
    deleteContactService
}