import { ProductsData } from "../data/ProductsData"
import { PurchaseData } from "../data/PurchaseData"
import { CustomError } from "../models/CustomError"
import { TokenManager } from "../services/TokenManager"


export class PurchaseBusiness {
   constructor (
    private purchaseData: PurchaseData,
    private tokenManager: TokenManager
   ){}
    

    purchase = async (token:string) => {
        try {
            if(!token) {
                throw new CustomError(401, "Login first")
            }

            const user = this.tokenManager.getTokenData(token)

            const response = await this.purchaseData.purchase(user.id)

            return response
            
        } catch (error:any) {
            throw new CustomError(404, error.message)
        }
    }
}