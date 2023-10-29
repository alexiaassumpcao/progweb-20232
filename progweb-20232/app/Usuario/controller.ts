import { UserFactory, UserUpdateRequestFactory } from "App/interfaces/usuario";
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

    public async update({ params, request }: HttpContextContract) {
        const repository = new UserRepository()
        const svc = new UserService(repository)

        const email = request.input('email', undefined)
        const name = request.input('name', undefined)
        const description = request.input('description', undefined)

        const id = params.id;
        const userToUpdate = UserUpdateRequestFactory(id, name, email, description)

        const result = svc.updateUser(userToUpdate)
        return result
    }


    public async getByID({ params }: HttpContextContract) {
        const repository = new UserRepository()
        const svc = new UserService(repository)
        const id = parseInt(params.id);
        const user = await svc.getUserByID(id)
        return user
    }

    public async list({}: HttpContextContract) {
        const repository = new UserRepository()
        const svc = new UserService(repository)
        const users = await svc.listUsers()
        return users
    }

    public async deleteByID({ params }: HttpContextContract) {
        const repository = new UserRepository()
        const svc = new UserService(repository)
        const id = parseInt(params.id)
        await svc.deleteUser(id)
    }
}
