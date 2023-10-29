import Route from '@ioc:Adonis/Core/Route'

export const CriaRotaUser = () => {
    Route.group(() => {
        Route.post('/', 'controller.create').as('create')

    }).prefix('/users').namespace('App/Usuario');
}