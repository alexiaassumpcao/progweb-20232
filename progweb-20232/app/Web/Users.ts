import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CreateUserService } from 'App/API/User/utils'

export default class WebCustomUserController {
    public async login({ view }: HttpContextContract) {
            return view.render('users/login')
    }
    public async register({ view }: HttpContextContract) {
            return view.render('users/register')
    }
    public async createAuth({ view }: HttpContextContract) {
            return view.render('users/auth') 
    }
    public async show({ view, auth }: HttpContextContract) {
            if(auth.isAuthenticated) {
                const svc = CreateUserService()
              const user = await svc.getUserByEmail(auth.user?.email as string) 
              return view.render('users/profile', { user: user })
            }
    }
}