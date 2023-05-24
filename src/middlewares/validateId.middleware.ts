import { NextFunction, Request, Response } from "express";
import { EntityTarget, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { uuidSchema } from "../shcemas/uuid.schema";


const validateIdMiddleware = (entity: EntityTarget<any>) => async (req:Request, res: Response, next: NextFunction): Promise<void> => {
    const currentId: string = uuidSchema.parse(req.params.id)    
    
    const repository: Repository<any> = AppDataSource.getRepository(entity)

    
    const findId = await repository.findOneBy({id: currentId})    
    if (!findId) {
        throw new AppError("Id not found", 404)
    }
    
    return next()
}


export default validateIdMiddleware