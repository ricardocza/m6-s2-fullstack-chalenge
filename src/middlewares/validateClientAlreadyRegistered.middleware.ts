import { NextFunction, Request, Response } from "express";
import { EntityTarget, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { uuidSchema } from "../shcemas/uuid.schema";
import { Client } from "../entities/client.entity";
import { Contact } from "../entities/contact.entity";


const validateClientAlreadyRegistered = async (req:Request, res: Response, next: NextFunction): Promise<void> => {
    const currentId: string = uuidSchema.parse(res.locals.id)   
     
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const clientInstance: Client | null = await clientRepository.findOneBy({id: currentId})
    
    const findId = await contactRepository.findOneBy({client: clientInstance!})    
    if (findId) {
        throw new AppError("Client already registered", 400)
    }
    
    return next()
}


export default validateClientAlreadyRegistered