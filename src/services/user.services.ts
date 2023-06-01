import { DeleteResult, Repository } from "typeorm";
import { ICreateUser, ICreateUserResponse, IListUserResponse, IUpdateUser } from "../interfaces/user.interfaces";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import { createUserSchemaResponse, listUsersSchema } from "../shcemas/users.schemas";
import { AppError } from "../error";

const createUserService = async (userData: ICreateUser): Promise<ICreateUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const userInstance: User = userRepository.create(userData)
    const savedUser: User = await userRepository.save(userInstance)
    
    return createUserSchemaResponse.parse(savedUser)
}

const listUserService = async (): Promise<IListUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const userInstance: User[] | undefined = await userRepository.find()

    return listUsersSchema.parse(userInstance)
}

const deleteUserService = async (userId: string): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const userInstance: User | null = await userRepository.findOneBy({id: userId})
    await userRepository.remove(userInstance!)    
}

const updateUserService = async (userData: ICreateUser, userId: string): Promise<ICreateUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const oldInstance: User | null = await userRepository.findOneBy({id: userId})
    const updatedUser: User = userRepository.create({...oldInstance, ...userData})
    await userRepository.save(updatedUser);
    
    return createUserSchemaResponse.parse(updatedUser)
}

export {
    createUserService, 
    listUserService, 
    deleteUserService, 
    updateUserService    
}