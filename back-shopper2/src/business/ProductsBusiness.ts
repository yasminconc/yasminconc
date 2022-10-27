import { ProductsData } from "../data/ProductsData";
import { CustomError } from "../models/CustomError";


export class ProductsBusiness {
    constructor(
        private productsData:ProductsData
    ){}

    getStock = async () => {
        try {
          const response = await this.productsData.getStock()

          return response
      
        } catch (error:any) {
            throw new CustomError(404, error.message)
        }

    }

    realodStock = async () => {
        try {
            await this.productsData.realodStock()
            
        } catch (error:any) {
            throw new CustomError(404, error.message)
        }
    }
    
}