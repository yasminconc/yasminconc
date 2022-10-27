import  express  from "express"
import { ProductsBusiness } from "../business/ProductsBusiness"
import { ProductsController } from "../controller/ProductsController"
import { ProductsData } from "../data/ProductsData"


export const productsRouter = express.Router()

export const productsBusiness: ProductsBusiness = new ProductsBusiness(
    new ProductsData()
)

const productsController: ProductsController =  new ProductsController(productsBusiness)

productsRouter.get('/products/stock', productsController.getStock)
productsRouter.put('/realod-stock', productsController.reloadStock)