import jwt from "jsonwebtoken";
import { Repository } from "typeorm";
import { ILogin } from "../interfaces/login.interface";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { compare } from "bcryptjs";

const loginService = async (data: ILogin): Promise<string> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOneBy({email: data.email})

    if (!user) {
        throw new AppError("Invalid Credentials", 400)
    }

    const passwordMatch: boolean = await compare(data.password, user.password)
    if (!passwordMatch) {
        throw new AppError("Invalid Credentials", 400)
    }

    const token = jwt.sign(
        {
            userEmail: user.email
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: process.env.EXPIRES_IN,
            subject: String(user.id)
        }
    )
        
    return token
}

export {loginService}