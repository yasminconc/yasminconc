import express, { Express } from "express";
import { purchaseRouter } from "./router/PurchaseRouter";
import { productsRouter } from "./router/ProductsRouter";
import { userRouter } from "./router/UserRouter";
import { cartRouter } from "./router/CartRouter";
import { AddressInfo } from "net";
import dotenv from "dotenv";
import cors from "cors"
 
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