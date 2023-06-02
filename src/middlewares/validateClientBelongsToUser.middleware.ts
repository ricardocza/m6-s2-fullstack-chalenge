import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { Client } from "../entities/client.entity";
import { User } from "../entities/user.entity";


const validateClientBelongsToUserMiddleware = async (req:Request, res: Response, next: NextFunction): Promise<void> => {
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const client: Client | null = await clientRepository.findOneBy({id: req.params.id})

    if(!client) {
        throw new AppError("Client id not found", 404)
    }
    
    const clientInstance: Client | null = await clientRepository.findOneBy({id: req.params.id, user: {id: res.locals.id}})
   
    if(!clientInstance) {
        throw new AppError("This client doesn't belong to you", 401)
    }
    
    return next()
}


export default validateClientBelongsToUserMiddleware