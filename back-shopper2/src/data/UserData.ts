import { CustomError } from "../models/CustomError";
import { User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserData extends BaseDatabase {

    private tableName = ' User_shopper '

    signup = async (user: User) => {

        try {
            await this.connection(this.tableName)
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
            })

            
        } catch (error:any) {
            throw new CustomError(404,error.message);
            
        }
    }

    getUserByEmail = async (email: string) => {

        try {
            const reponse = await this.connection(this.tableName)
            .where({email: email})

            return reponse[0]
            
        } catch (error:any) {
            throw new CustomError(404,error.message);
        }

    }

    getUser = async (id: string) => {
        try {
            const response = await this.connection(this.tableName)
            .select('id','name')
            .where({id: id})

            return response[0]
            
        } catch (error:any) {
            throw new CustomError(404,error.message);
        }
    }
}
