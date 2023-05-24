import { Request, Response } from "express";
import { ICreateContactResponse } from "../interfaces/contact.interfaces";
import { createContactService } from "../services/contact.services";

const createContactController = async (req: Request, res: Response): Promise<Response> => {
    const createContact: ICreateContactResponse = await createContactService(req.body, req.params.id)

    return res.status(201).json(createContact)
}

const listContactController = async (req: Request, res: Response): Promise<Response> => {

    return res.status(201).json({message: "list contact"})

}

export {createContactController, listContactController}