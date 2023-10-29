import { UserFactory } from "App/interfaces/usuario";
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UserRepository } from "./repository";
import { UserService } from "./service";

export default class UserController {
    public async create({ request }: HttpContextContract) {
        const repository = new UserRepository()
        const svc = new UserService(repository)
        const email = request.input('email', undefined)
        const name = request.input('name', undefined)
        const description = request.input('description', undefined)
        const newUser = UserFactory(name, email, description)
        const resp = svc.createUser(newUser)
        return resp
    }
}
