import { Request, Response } from "express";
import { ICreateContactResponse } from "../interfaces/contact.interfaces";
import { createContactService, listContactService } from "../services/contact.services";

const createContactController = async (req: Request, res: Response): Promise<Response> => {
    const createContact: ICreateContactResponse = await createContactService(req.body, req.params.id)

    return res.status(201).json(createContact)
}

const listContactController = async (req: Request, res: Response): Promise<Response> => {
    const listContact: ICreateContactResponse[] = await listContactService()
    return res.status(200).json(listContact)
}

export {createContactController, listContactController}