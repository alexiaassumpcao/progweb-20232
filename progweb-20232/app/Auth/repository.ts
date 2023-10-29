import Auth from 'App/Models/Auth'
import { AuthType } from 'App/Auth/interface'

export class AuthRepository {
    idField= "id"
    userIdField = "user_id"
    async listAuths():Promise<Auth[]> {
        const auths = await Auth.all()
        return auths
    }

    async getAuthByID(authID: number): Promise<Auth> {
        const auth = await Auth.findByOrFail(this.idField, authID)
        return auth
    }

    async getAuthByUserID(userID: number): Promise<Auth> {
        const auth = await Auth.findByOrFail(this.userIdField, userID)
        return auth
    }

    async createAuth(newAuth: AuthType) :Promise<Auth> {
        const createdAuth = await Auth.create(newAuth)
        return createdAuth
    }

    async update(authToUpdate: AuthType) :Promise<Auth> {
        const updatedAuth = await Auth.updateOrCreate(authToUpdate, authToUpdate)
        return updatedAuth
    }

    async delete(authID: number){
        const auth = await Auth.findByOrFail(this.idField, authID)
        await auth.delete()
    }
}