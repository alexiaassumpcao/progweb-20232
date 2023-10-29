import Auth from 'App/Models/Auth'
import { AuthType } from 'App/Auth/interface'

export class AuthRepository {
    async listAuths():Promise<Auth[]> {
        const auths = await Auth.all()
        return auths
    }

    async getAuthByID(authID: number): Promise<Auth | null> {
        const auth = await Auth.find(authID)
        return auth
    }

    async createAuth(newAuth: AuthType) :Promise<Auth> {
        const createdAuth = await Auth.create(newAuth)
        return createdAuth
    }
}