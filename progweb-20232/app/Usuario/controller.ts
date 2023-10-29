import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CreateUserCreateRequestBody, CreateUserService, CreateUserUpdateRequestBody } from "./utils";

export default class UserController {
    public async create({ request }: HttpContextContract) {
        const svc = CreateUserService()
        const newUser = CreateUserCreateRequestBody(request)
        
        const result = svc.createUser(newUser)
        return result
    }

    public async update({ params, request }: HttpContextContract) {
        const svc = CreateUserService()
        const userToUpdate = CreateUserUpdateRequestBody(params, request)
        
        const result = svc.updateUser(userToUpdate)
        return result
    }


    public async getByID({ params }: HttpContextContract) {
        const svc = CreateUserService()
        const id = parseInt(params.id);

        const user = await svc.getUserByID(id)
        return user
    }

    public async list({}: HttpContextContract) {
        const svc = CreateUserService()

        const users = await svc.listUsers()
        return users
    }

    public async deleteByID({ params }: HttpContextContract) {
        const svc = CreateUserService()
        const id = parseInt(params.id)

        await svc.deleteUser(id)
    }
}
