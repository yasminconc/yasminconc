import { CartData } from "../data/CartData";
import { ProductsData } from "../data/ProductsData";
import { Cart } from "../models/Cart";
import { CustomError } from "../models/CustomError"
import { TokenManager } from "../services/TokenManager";


export class CartBusiness {
    constructor(
        private cartData: CartData,
        private tokenManager: TokenManager,
        private productsData: ProductsData
    ){}

    addProduct = async (token: string, productId: string, quantity: number) => {
        try {
            if(!token){
                throw new CustomError(401,'Login first');    
            }

            if(!productId){
                throw new CustomError(400,'Add a product');  
            }

            if(!quantity){
                throw new CustomError(400,'Enter a quantity')   

            }else if(quantity <= 0){
                throw new CustomError(400,'The quantity must be greater than zero');  
            }

            const product = await this.productsData.getProductById(productId)

            if(product.qty_stock < quantity) {
                throw new CustomError(400,'Quantity unavailable');  
            }

            const verifyCart = await this.cartData.getProductById(productId)

            if(verifyCart){
             const response = await this.cartData.updateQuantity(productId, quantity)

             return response

            }


            const user = this.tokenManager.getTokenData(token)


            await this.cartData.addProduct(
                new Cart(
                    user.id,
                    productId,
                    product.name,
                    product.price,
                    quantity
                )
            )
            
        } catch (error:any) {
            throw new CustomError(404, error.message)
        }
    }


    getCart = async (token: string) => {
        try {
            if(!token){
                throw new CustomError(401,'Login first');    
            }

            const user = this.tokenManager.getTokenData(token)

            const response =  await this.cartData.getCart(user.id)

            return response
            
        } catch (error:any) {
            throw new CustomError(404, error.message)
        }
    }


    deleteProduct = async (token: string, productId: string) => {
        try {
            if(!token){
                throw new CustomError(401,'Login firts');  
            }

            if(!productId){
                throw new CustomError(401, 'Product not found');
            }

            const user = this.tokenManager.getTokenData(token)

            await this.cartData.deleteProduct(productId, user.id)
            
            
        } catch (error:any) {
            throw new CustomError(404, error.message)
        }
    }


    editQuantity = async(token: string, productId:string, quantity: number) => {
        try {
            if(!token) {
                throw new CustomError(401, "Login first")
            }
            if(!productId) {
                throw new CustomError(400, "Product not found")
            }
            if(!quantity) {
                throw new CustomError(400, "Insert a quantity")
            }

            const user = this.tokenManager.getTokenData(token)
            const verifyCart = await this.cartData.verifyCart(user.id, productId)

            console.log(verifyCart)

            if(!verifyCart) {
                throw new CustomError(400, "Product not found in your cart")
            }

            await this.cartData.editQuantity(user.id, productId, quantity)
            
        } catch (error:any) {
            throw new CustomError(404, error.message)
        }
    }
}