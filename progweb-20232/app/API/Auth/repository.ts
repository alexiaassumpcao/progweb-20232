import Auth from 'App/Models/Auth'
import { AuthType } from 'App/API/Auth/interface'

export class AuthRepository {
    idField= "id"
    userIdField = "user_id"
    emailField = "email"
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
        const updatedAuth = await Auth.updateOrCreate({ id: authToUpdate.id }, authToUpdate)
        return updatedAuth
    }

    async updatePassword(email: string, password: string) :Promise<Auth> {
        const auth = await Auth.findByOrFail(this.emailField, email)
        const authToupdate = {
            user_id: auth.user_id,
            id: auth.id,
            email: auth.email,
            password: password,
        }
        const updatedAuth = await Auth.updateOrCreate({ id: auth.id }, authToupdate)
        return updatedAuth
    }

    async delete(authID: number){
        const auth = await Auth.findByOrFail(this.idField, authID)
        await auth.delete()
    }
}