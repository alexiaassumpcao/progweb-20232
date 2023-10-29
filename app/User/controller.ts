import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CreateUserService } from "./utils";
import { UserCreateRequestSchema, UserUpdateRequestSchema } from './interface';

export default class UserController {
    public async create({ request, response }: HttpContextContract) {
        try {
            const newUser = await request.validate({ schema: UserCreateRequestSchema })
            const svc = CreateUserService()
        
            const result = svc.createUser(newUser)
            response.status(201)
            return result
        } catch (error) {
            return error
        }
    }

    public async update({ params, request, response }: HttpContextContract) {
        try {
            const svc = CreateUserService()

            var userToUpdate = await request.validate({ schema: UserUpdateRequestSchema })
            userToUpdate.id = parseInt(params.id)
        
            const result = svc.updateUser(userToUpdate)
            response.status(200)
            return result
        } catch(error) {
            return error
        }  
    }


    public async getByID({ params }: HttpContextContract) {
        try {
            const svc = CreateUserService()
            const id = parseInt(params.id);
    
            const user = await svc.getUserByID(id)
            return user
        } catch (error) {
            return error
        }
    }

    public async list({}: HttpContextContract) {
        try {
            const svc = CreateUserService()

            const users = await svc.listUsers()
            return users
        } catch (error) {
            return error
        }  
    }

    public async deleteByID({ params, response }: HttpContextContract) {
        try {
            const svc = CreateUserService()
            const id = parseInt(params.id)
    
            await svc.deleteUser(id)
            response.status(204)
        } catch(error) {
            return error
        } 
    }
}
