import { CustomError } from "../models/CustomError";
import { BaseDatabase } from "./BaseDatabase";


export class PurchaseData extends BaseDatabase {

    private tableName =  "Cart_shopper"

    purchase = async (id:string) => {
        try { 
            const response = await this.connection(this.tableName)
            .select('name', 'price', 'quantity')
            .where({user_id: id})

            await this.connection.raw(
                `UPDATE Products_shopper as product 
                 INNER JOIN Cart_shopper as cart
                 SET qty_stock = product.qty_stock - cart.quantity
                 WHERE cart.product_id = product.id
                 AND cart.user_id = "${id}"`
            )

            await this.connection(this.tableName)
            .delete()
            .where({user_id: id})
            
            return response
            
        } catch (error:any) {
            throw new CustomError(404,error.message);
        }
    }
}