import Route from '@ioc:Adonis/Core/Route'

export const CreateAuthRoutes = () => {
    Route.group(() => {
        Route.post('/', 'controller.create').as('create')
        Route.get('/:id', 'controller.getByID').as('getByID')
        Route.patch('/:id', 'controller.update').as('update')
        Route.delete('/:id', 'controller.deleteByID').as('deleteByID')

        Route.post('/login', 'controller.login').as('login')

    }).prefix('/auths').as("authsv1").namespace('App/Auth');
}