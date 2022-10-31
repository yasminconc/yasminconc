import { Request, Response } from 'express'
import {CartBusiness} from '../business/CartBusiness'


export class CartController {
    constructor(
        private cartBusiness: CartBusiness
    ){}


    addProduct = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const {productId} = req.params
            const {quantity, date} = req.body

            const response = await this.cartBusiness.addProduct(token, productId, quantity, date) 

            res.send('Product added successfully')
            
        } catch (error:any) {
            res.status(404).send(error.sqlMessage || error.message)
        }
    }


    deleteProduct = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const {productId} = req.params 

            const response = await this.cartBusiness.deleteProduct(token, productId)

            res.send('product deleted successfully')
            
        } catch (error:any) {
            res.status(404).send(error.sqlMessage || error.message)
        }
    }

    
    getCart = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            
            const response = await this.cartBusiness.getCart(token)

            res.send(response)
            
        } catch (error:any) {
            res.status(404).send(error.sqlMessage || error.message)
        }
    }


    editQuantity = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const {productId} = req.params
            const {quantity} = req.body

            const response = await this.cartBusiness.editQuantity(token, productId, quantity)

            res.send('Product updated')
            
        } catch (error:any) {
            res.status(404).send(error.sqlMessage || error.message)
        }
    }
    

    cartTotal = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const response = await this.cartBusiness.cartTotal(token)

            res.status(200).send(response)
            
        } catch (error:any) {
            res.status(404).send(error.sqlMessage || error.message)
        }
    }
}