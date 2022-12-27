import { ICreateUser } from './../../interfaces/user.d';
import { Request, Response } from "express"
import { createUserService } from '../../services/user/createUser.service';


const createUserController = async (req: Request, res: Response) => {
    try {
        const data: ICreateUser = req.body
        const user = await createUserService(data)
        return res.status(201).json(user)
    } catch (error) {
        console.log(error);
    }
    
}


export { createUserController }