import { Request, Response } from "express";

const createClientController = async (req: Request, res: Response): Promise<Response> => {


    return res.status(203).json({message: "Ola"})
}

export {createClientController}