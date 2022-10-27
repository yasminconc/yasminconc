import  express  from "express"
import { UserBusiness } from "../business/UserBusiness"
import { UserController } from "../controller/UserController"
import { UserData } from "../data/UserData"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager } from "../services/TokenManager"

export const userRouter = express.Router()

const userBusiness: UserBusiness = new UserBusiness(
    new UserData(),
    new IdGenerator(),
    new HashManager(),
    new TokenManager()
)

const userController: UserController = new UserController(userBusiness)

userRouter.post('/signup', userController.signup )

userRouter.post('/login', userController.login )

userRouter.get('/get-user', userController.getUser )