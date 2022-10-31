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

cartRouter.get('/my-cart', cartController.getCart )
cartRouter.get("/total-cart", cartController.cartTotal)
cartRouter.put("/:productId/update", cartController.editQuantity)
cartRouter.delete('/delete/:productId', cartController.deleteProduct)
cartRouter.post('/add-products/:productId', cartController.addProduct)