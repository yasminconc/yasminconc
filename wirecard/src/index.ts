import { CardController } from "./Controller/CardController"
import { PaymentController } from "./Controller/PaymentController"
import { UserController } from "./Controller/UserController"
import {app} from "./Services/app"


const userController = new UserController()
const paymentController = new PaymentController()
const cardController = new CardController()

//--------------------------------------------------------------Signup--------------------------------------------------------------------------------------------------------

app.post("/signup", userController.signup)


//--------------------------------------------------------------Login--------------------------------------------------------------------------------------------------------


app.post("/login", userController.login )


//--------------------------------------------------------------Payment credit card--------------------------------------------------------------------------------------------------------

app.post("/payment/creditcard", paymentController.creditPayment)



//--------------------------------------------------------------Payment boleto--------------------------------------------------------------------------------------------------------


app.post("/payment/boleto", paymentController.boletoPayment)


//--------------------------------------------------------------get payment--------------------------------------------------------------------------------------------------------


app.get("/get/payment", paymentController.getPayment)



//--------------------------------------------------------------register credit card--------------------------------------------------------------------------------------------------------


app.post("/creditcard" ,cardController.card)

