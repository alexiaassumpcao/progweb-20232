import { AuthType } from "App/Auth/interface";
import { AuthRepository } from "./repository";
import Auth from "App/Models/Auth";

export class AuthService {
    repository: AuthRepository;
    constructor(authRepository: AuthRepository) {
        this.repository = authRepository;
    }

    async listAuths(): Promise<Auth[] | undefined>  {
        try {
            return await this.repository.listAuths()
        } catch(error) {
            console.error('error on list auths service: ', error)
            return error
        }
        
    }

    async createAuth(newAuth: AuthType): Promise<Auth | undefined> {
        try {
            const createdAuth = await this.repository.createAuth(newAuth)
            return createdAuth
        } catch (error) {
            console.error("error on create auth service: ", error)
            return error
        }  
    }

    async updateAuth(authToUpdate: AuthType): Promise<Auth | undefined> {
        try {
            const createdAuth = await this.repository.update(authToUpdate)
            return createdAuth
        } catch (error) {
            console.error("error on update auth service: ", error)
            return error
        }  
    }

    async updatePasswordAuth(email: string, password: string): Promise<Auth | undefined> {
        try {
            const updatedAuth = await this.repository.updatePassword(email, password)
            return updatedAuth
        } catch (error) {
            console.error("error on update password auth service: ", error)
            return error
        }  
    }

    async getAuthByID(authID: number): Promise<Auth | undefined> {
        try {
            const auth = await this.repository.getAuthByID(authID)
            return auth
        } catch(error) {
            console.error("error on get auth by id service: ", error)
            return error
        }
    }

    async getAuthByUserID(userID: number): Promise<Auth | undefined> {
        try {
            const auth = await this.repository.getAuthByUserID(userID)
            return auth
        } catch(error) {
            console.error("error on get auth by user id service: ", error)
            return error
        }
    }

    async deleteAuthByID(authID: number) {
        try {
            await this.repository.delete(authID)
        } catch(error) {
            console.error("error on delete auth by id service: ", error)
            return error
        }
        
    }

}