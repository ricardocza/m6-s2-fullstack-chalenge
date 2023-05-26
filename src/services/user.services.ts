import { Repository } from "typeorm";
import { ICreateUser, ICreateUserResponse } from "../interfaces/user.interfaces";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import { createUserSchemaResponse } from "../shcemas/users.schemas";

const createUserService = async (userData: ICreateUser): Promise<ICreateUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const userInstance: User = userRepository.create(userData)
    const savedUser: User = await userRepository.save(userInstance)
    
    return createUserSchemaResponse.parse(savedUser)
}

export {createUserService}