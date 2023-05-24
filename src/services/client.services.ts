import { Repository } from "typeorm";
import { ICreateClient, ICreateClientResponse } from "../interfaces/client.interfaces";
import { Client } from "../entities/client.entity";
import { AppDataSource } from "../data-source";
import { createClientSchemaResponse } from "../shcemas/client.schemas";

const createClientService = async (data: ICreateClient): Promise<ICreateClientResponse> => {
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)
    const clientInstance: Client = clientRepository.create(data)
    const savedClient: Client = await clientRepository.save(clientInstance)

    return createClientSchemaResponse.parse(savedClient)
}

export {createClientService}