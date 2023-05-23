import { Request, Response } from "express";

const loginController = async (req: Request, res: Response): Promise<Response> => {

    return res.status(200).json({message: "Login"})
}

export {loginController}