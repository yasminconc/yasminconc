import { CustomError } from "../models/CustomError";
import { BaseDatabase } from "./BaseDatabase";


export class ProductsData extends BaseDatabase {

    private table = 'Products_shopper'

    getStock = async () => {
        try {
            const response = await this.connection(this.table)
            .select( 'id', 'name', 'price', 'qty_stock')

            return response

        } catch (error:any) {
            throw new CustomError(404,error.message)
        }
    }

    getProductById = async (id: string) => {
        try {
           const response = await this.connection(this.table)
           .where({id: id})

           return response[0]
            
        } catch (error:any) {
            throw new CustomError(404,error.message)
        }
    }

    realodStock = async () => {
        try {
            const response = await this.connection(this.table)
            .update({qty_stock: 500})
            .where('qty_stock' , '<=' , '10')
            
        } catch (error:any) {
            throw new CustomError(404,error.message)
        }
    }
}