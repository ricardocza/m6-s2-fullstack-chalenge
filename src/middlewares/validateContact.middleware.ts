import { NextFunction, Request, Response } from "express";
import { EntityTarget, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { uuidSchema } from "../shcemas/uuid.schema";
import { Client } from "../entities/client.entity";
import { Contact } from "../entities/contact.entity";


const validateContact = async (req:Request, res: Response, next: NextFunction): Promise<void> => {
    const currentId: string = uuidSchema.parse(res.locals.id)   
    const contactEmail: string = req.body.email
     
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const clientInstance: Client | null = await clientRepository.findOneBy({id: currentId})

    const contactInstance: Contact | null = await contactRepository.findOneBy({email: contactEmail, client: clientInstance!})  
    
    if (contactInstance) {
        throw new AppError("Contact already registered to this client", 400)
    }
    
    return next()
}


export default validateContact