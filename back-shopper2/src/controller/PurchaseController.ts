import { Request, Response } from "express"
import { PurchaseBusiness } from "../business/PurchaseBusiness"


export class PurchaseController {
    constructor (
        private purchaseBusiness: PurchaseBusiness
    ) {}


    purchase = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string

            const response = await this.purchaseBusiness.purchase(token)	

            res.send(response)
            
        } catch (error:any) {
            res.status(404).send(error.sqlMessage || error.message)
        }
    }

}
