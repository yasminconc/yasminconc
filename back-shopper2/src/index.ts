import express, { Express } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { userRouter } from "./router/UserRouter";
import { productsRouter } from "./router/ProductsRouter";
import { cartRouter } from "./router/CartRouter";
import cors from "cors"
import { purchaseRouter } from "./router/PurchaseRouter";
 
dotenv.config();

export const app: Express = express();

app.use(express.json());
app.use(cors())


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error("Failure upon starting server.");
    }

})

app.use(userRouter)
app.use(productsRouter)
app.use(cartRouter)
app.use(purchaseRouter)