import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CreateAuthService } from "./utils";
import { AuthCreateRequest, AuthUpdateRequest } from "./interface";

export default class AuthController {
    public async create({ request, response } : HttpContextContract) {
        try {
            const newAuth = await request.validate({ schema: AuthCreateRequest })
            const svc = CreateAuthService()
            const auth = await svc.createAuth(newAuth)
            response.status(201)
            return auth
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

    public async deleteByID({ params, response }: HttpContextContract) {
        try {
            const id = parseInt(params.id)
            const svc = CreateAuthService()
            await svc.deleteAuthByID(id)
            response.status(204)
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
