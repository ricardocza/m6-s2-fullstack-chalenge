import { NextFunction, Request, Response } from "express";
import { EntitySchema, EntityTarget, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const validateEmailMiddleware = (entity: EntityTarget<any>) => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const currentEmail: string = req.body.email
    const repository: Repository<any> = AppDataSource.getRepository(entity)
    const findEmail = await repository.findOneBy({email: currentEmail})

    if (findEmail) {
        throw new AppError("Email already in use", 400)
    }
    
    return next()
}

export default validateEmailMiddleware