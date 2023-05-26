import { Request, Response } from "express";
import { ICreateClientResponse } from "../interfaces/client.interfaces";
import { createClientService, listClientService } from "../services/client.services";

const createClientController = async (req: Request, res: Response): Promise<Response> => {
    const createClient: any = await createClientService(req.body)

    return res.status(201).json(createClient)
}

const listClientController = async(req: Request, res: Response): Promise<Response> => {
    const listClients: any = await listClientService()
    return res.status(200).json(listClients)
}

export {createClientController, listClientController}