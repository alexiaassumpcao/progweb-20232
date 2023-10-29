import { AuthService } from "./service";
import { AuthRepository } from "./repository";
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { AuthFactory } from "App/interfaces/auth";

export default class AuthController {
    public async list({}: HttpContextContract) {
        const repository = new AuthRepository()
        const svc = new AuthService(repository)
        const auths = await svc.listAuths()
    
        return auths
    }

    public async create({ request } : HttpContextContract) {
        const idUser = request.input("id_user")
        const email = request.input("email")
        const password = request.input("password")
        const newAuth = AuthFactory(idUser, password, email)
        const repository = new AuthRepository()
        const svc = new AuthService(repository)
        const authID = await svc.createAuth(newAuth)
        return authID
    }
}
