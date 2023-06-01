import { Repository } from "typeorm";
import { ICreateClient, ICreateClientResponse, IListClientResponse, IUpdateClient } from "../interfaces/client.interfaces";
import { Client } from "../entities/client.entity";
import { AppDataSource } from "../data-source";
import { createClientSchemaResponse, listAllClientsSchemaResponse } from "../shcemas/client.schemas";
import { AppError } from "../error";

const createClientService = async (data: ICreateClient, userId: string): Promise<any> => {    
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)
    const clientInstance: Client = clientRepository.create({...data, user: {id: userId}})
    const savedClient: Client = await clientRepository.save(clientInstance)

    return createClientSchemaResponse.parse(savedClient)
}

const listClientService = async (clientId: string): Promise<any> => {    
    const clientsRepository: Repository<Client> = AppDataSource.getRepository(Client)
    const clientInstance: Client | null = await clientsRepository.findOne({relations: {contact: true}, where: {id: clientId}})    
    
    return createClientSchemaResponse.parse(clientInstance)
}

const listAllClientsService = async (userId: string): Promise<any> => {    
    const clientsRepository: Repository<Client> = AppDataSource.getRepository(Client)
    const clientInstance: Client[] = await clientsRepository.find({relations: {contact: true}, where: {user: {id: userId}}})    
    
    return listAllClientsSchemaResponse.parse(clientInstance)
}

const updateClientService = async (userData: ICreateClient, clientId: string, userId: string): Promise<ICreateClientResponse> => {
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)
    const clientInstance: Client | null = await clientRepository.findOneBy({id: clientId, user: {id: userId}})
    const updatedClient = clientRepository.create({...clientInstance, ...userData})
    const savedClient = await clientRepository.save(updatedClient)
    
    return createClientSchemaResponse.parse(savedClient)
}

const deleteClientService = async (clientId: string, userId: string): Promise<void> => {
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)
    const clientInstance: Client | null = await clientRepository.findOneBy({id: clientId, user: {id: userId}})
    await clientRepository.remove(clientInstance!)
}

export {
    createClientService,
    listClientService,
    listAllClientsService,
    updateClientService,
    deleteClientService
}