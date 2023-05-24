import { Request, Response } from "express";
import { createUserService } from "../services/user.services";
import { ICreateUserResponse } from "../interfaces/user.interfaces";

const createUserController = async (req: Request, res: Response): Promise<Response> => {
    const createUser: ICreateUserResponse = await createUserService(req.body)

    return res.status(201).json(createUser)
}
const readUserController = async (req: Request, res: Response): Promise<Response> => {

    return res.status(200).json({message: "read user"})
}

export {createUserController, readUserController}