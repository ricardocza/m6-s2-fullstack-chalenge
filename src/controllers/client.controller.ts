import { Request, Response } from "express";
import { ICreateClientResponse } from "../interfaces/client.interfaces";
import { createClientService, deleteClientService, listAllClientsService, listClientService, updateClientService } from "../services/client.services";

const createClientController = async (req: Request, res: Response): Promise<Response> => {
    const createClient: any = await createClientService(req.body, res.locals.id)
    return res.status(201).json(createClient)
}

const listAllClientsController = async(req: Request, res: Response): Promise<Response> => {
    const listClients: any = await listAllClientsService(res.locals.id)
    return res.status(200).json(listClients)
}

const listClientController = async(req: Request, res: Response): Promise<Response> => {
    const listClients: any = await listClientService(req.params.id)
    return res.status(200).json(listClients)
}

const updateClientController = async (req: Request, res: Response): Promise<Response> => {
    const updateClient: ICreateClientResponse = await updateClientService(req.body, req.params.id ,res.locals.id)
    return res.status(201).json(updateClient)
}

const deleteClientController = async (req: Request, res: Response): Promise<Response> => {
    await deleteClientService(req.params.id ,res.locals.id)
    return res.status(204).json()
}
export {
    createClientController, 
    listClientController,
    listAllClientsController,
    updateClientController,
    deleteClientController,    
}