import { Request, Response } from "express";
import { ICreateContactResponse, IListAllContactsResponse, IListContactResponse } from "../interfaces/contact.interfaces";
import { createContactService, deleteContactService, listAllContactsService, listContactService, updateContactService } from "../services/contact.services";

const createContactController = async (req: Request, res: Response): Promise<Response> => {
    const createContact: ICreateContactResponse = await createContactService(req.body, req.params.id)

    return res.status(201).json(createContact)
}

const listContactController = async (req: Request, res: Response): Promise<Response> => {
    const listContact: IListContactResponse = await listContactService(req.params.id)
    return res.status(200).json(listContact)
}

const listAllContactsController = async (req: Request, res: Response): Promise<Response> => {
    const listContact: IListAllContactsResponse = await listAllContactsService()
    return res.status(200).json(listContact)
}

const updateContactController = async (req: Request, res: Response): Promise<Response> => {
    const updatedContact: ICreateContactResponse = await updateContactService(req.body, req.params.id)
    return res.status(201).json(updatedContact)
}

const deleteContactController = async (req: Request, res: Response): Promise<Response> => {
    await deleteContactService(req.params.id)
    return res.status(204).json()
}

export {
    createContactController, 
    listContactController,
    listAllContactsController,
    updateContactController,
    deleteContactController
}