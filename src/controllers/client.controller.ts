import { Request, Response } from "express";
import { ICreateClientResponse } from "../interfaces/client.interfaces";
import { createClientService } from "../services/client.services";

const createClientController = async (req: Request, res: Response): Promise<Response> => {
    const createClient: ICreateClientResponse = await createClientService(req.body)

    return res.status(203).json(createClient)
}

const listClientController = async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).json({message: "list clients"})
}

export {createClientController, listClientController}