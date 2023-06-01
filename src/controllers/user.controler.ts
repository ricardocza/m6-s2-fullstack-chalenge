import { Request, Response } from "express";
import { createUserService, deleteUserService, listUserService, updateUserService } from "../services/user.services";
import { ICreateUserResponse, IListUserResponse } from "../interfaces/user.interfaces";

const createUserController = async (req: Request, res: Response): Promise<Response> => {
    const createUser: ICreateUserResponse = await createUserService(req.body)

    return res.status(201).json(createUser)
}
const readUserController = async (req: Request, res: Response): Promise<Response> => {
    const listUsers: IListUserResponse = await listUserService()

    return res.status(200).json(listUsers)
}

const updateUserController = async (req:Request, res: Response): Promise<Response> => {
    const userUpdated: ICreateUserResponse = await updateUserService(req.body, res.locals.id)
    return res.status(201).json(userUpdated)
}

const deleteUserController = async (req:Request, res: Response): Promise<Response> => {
    await deleteUserService(res.locals.id)    
    return res.status(204).json()
}

export {
    createUserController, 
    readUserController,
    updateUserController, 
    deleteUserController,    
}