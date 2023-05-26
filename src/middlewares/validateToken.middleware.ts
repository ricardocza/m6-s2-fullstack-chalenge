import "dotenv/config"
import jwt from "jsonwebtoken"
import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const validateTokenMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const token: string | undefined = req.headers.authorization?.split(" ")[1]
    if (!token) {
        throw new AppError("Missing Bearer token", 401)
    }

    jwt.verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
        if (error) {
            throw new AppError(error.message, 401)
        }
        res.locals.id = decoded.sub        
    })

    return next()
}

export default validateTokenMiddleware