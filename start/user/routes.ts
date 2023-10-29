import Route from '@ioc:Adonis/Core/Route'

export const CriaRotaUser = () => {
    Route.group(() => {
        Route.get('/', 'controller.list').as('list')
        Route.post('/', 'controller.create').as('create')
        Route.patch('/:id', 'controller.update').as('update')
        Route.get('/:id', 'controller.getByID').as('getByID')
        Route.delete('/:id', 'controller.deleteByID').as('deleteByID')
    }).prefix('/users').as('users').namespace('App/User');
}