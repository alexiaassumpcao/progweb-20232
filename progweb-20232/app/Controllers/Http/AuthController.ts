/* eslint-disable prettier/prettier */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CreateAuthService } from "../../Auth/utils";
import { AuthCreateRequest, AuthUpdateRequest } from "../../Auth/interface";
import { CreateUserService } from 'App/User/utils';

export default class AuthController {
    public async create({ request, response } : HttpContextContract) {
        const userSvc = CreateUserService()
        const svc = CreateAuthService()
        try {
            var newAuth = await request.validate({ schema: AuthCreateRequest })
            const user = await userSvc.getUserByEmail(newAuth.email)
            newAuth.user_id = user?.id
            
            const auth = await svc.createAuth(newAuth)
            if (auth != undefined) {
                response.redirect('/login')
            }
        } catch(error) {
            return error
        }   
    }


    public async getByID({ params }: HttpContextContract) {
        try {
            const id = parseInt(params.id)
            const svc = CreateAuthService()
            const auth = await svc.getAuthByID(id)
            return auth
        } catch(error) {
            return error
        }
    }

    public async update({ params, request, response }: HttpContextContract) {
        try {
            var authToUpdate = await request.validate({ schema: AuthUpdateRequest })
            authToUpdate.id = parseInt(params.id)
            const svc = CreateAuthService()
            const updatedAuth = await svc.updateAuth(authToUpdate)
            response.status(200)
            return updatedAuth
        } catch(error) {
            return error
        }
    }

    public async deleteByID({ params, response ,auth }: HttpContextContract) {
        try {
            if(auth.isAuthenticated) {
                const id = parseInt(params.id)
                const svc = CreateAuthService()
                await svc.deleteAuthByID(id)
                response.status(204)
            } else {
                response.status(401)
                response.send("Unauthorized")
            }
        } catch(error) {
            return error
        }
    }

    public async login({ auth, request, response }: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')

        try {
            await auth.use('web').attempt(email, password)
            response.redirect('/')
        } catch {
            return response.badRequest('Invalid credentials')
        }
    }
}
