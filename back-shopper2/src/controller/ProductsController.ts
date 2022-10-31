import { Request, Response } from "express";
import { ProductsBusiness } from "../business/ProductsBusiness";


export class ProductsController {
    constructor(
        private productsBusiness: ProductsBusiness
    ){}


    getStock = async (req:Request, res: Response) => {
        try {
            const response = await this.productsBusiness.getStock()

            res.send(response)
            
        } catch (error:any) {
            res.status(404).send(error.sqlMessage || error.message)
        }
    }
    

    reloadStock = async (req:Request, res: Response) => {
        try {
            const response = await this.productsBusiness.realodStock()

            res.send('reloaded stock successfully')
            
        } catch (error:any) {
            res.status(404).send(error.sqlMessage || error.message)
        }
    }

}