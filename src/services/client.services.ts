import { Repository } from "typeorm";
import { ICreateClient, ICreateClientResponse, IListClientResponse } from "../interfaces/client.interfaces";
import { Client } from "../entities/client.entity";
import { AppDataSource } from "../data-source";
import { createClientSchemaResponse, listClientSchemaResponse } from "../shcemas/client.schemas";
import { Contact } from "../entities/contact.entity";

const createClientService = async (data: ICreateClient): Promise<any> => {
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)
    const clientInstance: Client = clientRepository.create(data)
    const savedClient: Client = await clientRepository.save(clientInstance)

    return createClientSchemaResponse.parse(savedClient)
}

const listClientService = async (): Promise<any> => {
    const clientsRepository: Repository<Client> = AppDataSource.getRepository(Client)
    const clientInstance: any = await clientsRepository.find({relations: {contact: true}})    
    console.log(clientInstance)
    return listClientSchemaResponse.parse(clientInstance)

}

export {createClientService, listClientService}