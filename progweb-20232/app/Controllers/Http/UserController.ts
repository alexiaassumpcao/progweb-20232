/* eslint-disable prettier/prettier */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CreateUserService } from "../../User/utils";
import { UserCreateRequestSchema, UserType, UserUpdateRequestSchema } from '../../User/interface';

export default class UserController {
    public async create({ request, response }: HttpContextContract) {
        try {
            const newUser = await request.validate({ schema: UserCreateRequestSchema })
            const svc = CreateUserService()
            
            const user = await svc.createUser(newUser as UserType)
            if (user != undefined) {
                response.redirect('/auth')
            }
            
        } catch (error) {
            return error
        }
    }

    public async update({ params, request, response, auth }: HttpContextContract) {
        try {
            if(auth.isAuthenticated) {
                const svc = CreateUserService()

                var userToUpdate = await request.validate({ schema: UserUpdateRequestSchema })
                userToUpdate.id = parseInt(params.id)
            
                const result =await svc.updateUser(userToUpdate as UserType)
                response.status(200)
                return result
            } else {
                response.status(401)
                response.send("Unauthorized")
            }
        } catch(error) {
            return error
        }  
    }


    public async getByID({ params, auth, response }: HttpContextContract) {
        try {
            if(auth.isAuthenticated) {
                const svc = CreateUserService()
                const id = parseInt(params.id);
        
                const user = await svc.getUserByID(id)
                return user
            } else {
                response.status(401)
                response.send("Unauthorized")
            }
        } catch (error) {
            return error
        }
    }

    public async list({ auth, response }: HttpContextContract) {
        try {
            if(auth.isAuthenticated) {
                const svc = CreateUserService()

                const users = await svc.listUsers()
                return users
            } else {
                response.status(401)
                response.send("Unauthorized")
            }
        } catch (error) {
            return error
        }  
    }

    
    public async deleteByID({ params, response, auth }: HttpContextContract) {
        try {
            if(auth.isAuthenticated) {
                const svc = CreateUserService()
                const id = parseInt(params.id)
        
                await svc.deleteUser(id)
                response.status(204)
            } else {
                response.status(401)
                response.send("Unauthorized")
            }
        } catch(error) {
            return error
        } 
    }
}
