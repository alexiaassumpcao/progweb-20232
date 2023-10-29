import Route from '@ioc:Adonis/Core/Route'

export const CriaRotaAuth = () => {
    Route.group(() => {
        Route.get('/', 'controller.index').as('index')

        Route.post('login', async ({ auth, request, response }) => {
            const email = request.input('email')
            const password = request.input('password')
    
            try {
                await auth.use('web').attempt(email, password)
                response.redirect('/')
            } catch {
                return response.badRequest('Invalid credentials')
            }
    })

    }).prefix('/auths').namespace('App/Auth');




}