import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ){}

    signup = async (req: Request, res: Response) => {
        try {
            const {name, email, password} = req.body

            const response = await this.userBusiness.signup(name, email, password)

            res.send(response)
            
        } catch (error:any) {
            res.status(404).send(error.sqlMessage || error.message)
        }
    }

    login = async (req: Request, res: Response) => {
        try {
            const {email, password} = req.body

            const response = await this.userBusiness.login(email, password)

            res.send(response)

            
        } catch (error:any) {
            res.status(404).send(error.sqlMessage || error.message)

        }
    
    }

    getUser = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string

            const response = await this.userBusiness.getUser(token)

            res.send(response)

            
        } catch (error:any) {
            res.status(404).send(error.sqlMessage || error.message)
        }
    }
}