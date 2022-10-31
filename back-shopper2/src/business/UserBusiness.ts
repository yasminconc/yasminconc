import { UserData } from "../data/UserData";
import { CustomError } from "../models/CustomError";
import { User } from "../models/User";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";


export class UserBusiness {
    constructor(
        private userData:UserData,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private tokenManager: TokenManager
    ){}
    

    signup = async (name: string, email: string, password:string) => {
        try {
            if(!name){
                throw new CustomError(400, 'Enter a name');
            }

            if(!email){
                throw new CustomError(400, 'Enter an email address');
                
            }else if(email.indexOf("@") === -1){
                throw new CustomError(400, 'Enter a valid email address');
            }

            if(!password){
                throw new CustomError(400, 'Enter a password');

            }else if(password.length < 6){
                throw new CustomError(400, 'The password must be longer than 6 characteres')
            }


            const user = await this.userData.getUserByEmail(email)

            if(user){
                throw new CustomError(409, 'The user already exists');  
            }


            const id = this.idGenerator.generateId() 

            const hashPassword = await this.hashManager.hash(password)

            const token = this.tokenManager.generateToken({id})


            await this.userData.signup(
                new User(
                    id,
                    name,
                    email,
                    hashPassword
                )
            )

            return token

            
        } catch (error:any) {
            throw new CustomError(404, error.message)
        }
    }


    login = async (email: string, password: string) => {
        try {
            if(!email){
                throw new CustomError(400, 'Enter an email address');
                
            }else if(email.indexOf("@") === -1){
                throw new CustomError(400, 'Enter a valid email address');   
            }
    
            const user = await this.userData.getUserByEmail(email)
    
            if(!user){
                throw new CustomError(400, 'The email does not exist');
            }
            
            if(!password){
                throw new CustomError(400, 'Enter a password');   
            }
     
            const verifyPassword = await this.hashManager.compare(password, user.password)
    
            if(!verifyPassword){
                throw new CustomError(400,'Invalid password');  
            }
    
            const token = this.tokenManager.generateToken({id: user.id})
    
            return token

            
        } catch (error:any) {
            throw new CustomError(404, error.message)
        }
    }
    

    getUser = async (token: string) => {
        try {
            if(!token){
                throw new CustomError(400, 'Invalid token');
            }
            
            const user = this.tokenManager.getTokenData(token)

            const response = await this.userData.getUser(user.id)

            return response

 
        } catch (error:any) {
            throw new CustomError(404, error.message)
        }
    }
}