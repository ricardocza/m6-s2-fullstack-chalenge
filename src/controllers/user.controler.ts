import { Request, Response } from "express";

const createUserController = async (req: Request, res: Response): Promise<Response> => {

    return res.status(201).json({message: "create user"})
}
const readUserController = async (req: Request, res: Response): Promise<Response> => {

    return res.status(200).json({message: "read user"})
}

export {createUserController, readUserController}