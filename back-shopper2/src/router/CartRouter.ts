import  express  from "express"
import { CartBusiness } from "../business/CartBusiness";
import { CartController } from "../controller/CartController";
import { CartData } from "../data/CartData";
import { ProductsData } from "../data/ProductsData";
import { TokenManager } from "../services/TokenManager";

export const cartRouter = express.Router();

export const cartBusiness: CartBusiness = new CartBusiness(
    new CartData(),
    new TokenManager(),
    new ProductsData()
);

const cartController: CartController = new CartController(cartBusiness)

cartRouter.post('/add-products/:productId', cartController.addProduct)
cartRouter.get('/my-cart', cartController.getCart )
cartRouter.delete('/delete/:productId', cartController.deleteProduct)
cartRouter.put("/:productId/update", cartController.editQuantity)