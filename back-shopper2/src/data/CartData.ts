import { Cart } from "../models/Cart";
import { CustomError } from "../models/CustomError";
import { BaseDatabase } from "./BaseDatabase";


export class CartData extends BaseDatabase {

    private tableName = 'Cart_shopper'

    addProduct = async (cart: Cart) => {
        try {
            const response = await this.connection(this.tableName)
            .insert({
                user_id: cart.getUserId(),
                product_id: cart.getProductId(),
                name: cart.getName(),
                price: cart.getPrice(),
                quantity: cart.getQuantity()
            })
            
            console.log(response);

        } catch (error:any) {
            throw new CustomError(404,error.message);
        }
    }

    getProductById = async (id: string) => {
        try {
            const response = await this.connection(this.tableName)
            .where({product_id: id})

            return response[0]
            
        } catch (error:any) {
            throw new CustomError(404,error.message);
        }
    }


    updateQuantity = async (id: string, qty: number) => {
        try {
            const product = await this.getProductById(id)

            await this.connection(this.tableName)
            .update({quantity: product.quantity + qty})
            .where({product_id: id})
            
        } catch (error:any) {
            throw new CustomError(404,error.message);
        }
    }

    getCart = async (id: string) => {
        try {
            const response = await this.connection(this.tableName)
            .where({user_id: id})

            return response
            
        } catch (error:any) {
            throw new CustomError(404,error.message);
        }
    }

    deleteProduct = async (productId: string, userId: string) => {
        try {
             await this.connection(this.tableName)
            .delete()
            .where({product_id: productId})
            .andWhere({user_id: userId})
  
        } catch (error:any) {
            throw new CustomError(404,error.message);
        }
    }

    editQuantity = async (userId: string, productId: string, qty: number) => {
        try {
            await this.connection(this.tableName)
            .update({quantity: qty})
            .where({user_id: userId})
            .andWhere({product_id: productId})

        } catch (error: any) {
            throw new CustomError(404, error.message);
        }
    }

    verifyCart = async (userId: string, productId: string) => {
            try {
                const response = await this.connection(this.tableName)
                .where({product_id: productId})
                .andWhere({user_id: userId})

                return response[0]
                
            } catch (error:any) {
                throw new CustomError(404,error.message);
            }
        }
}