import Route from '@ioc:Adonis/Core/Route'
import { CreateAuthRoutes } from './auth/routes'
import { CreateUserRoutes, } from './user/routes'
import { CreatePostRoutes } from './post/routes'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})


Route.get('/health', async ({ response }) => {
  return response.send('OK')
})


Route.group(() => {
  CreateAuthRoutes()
  CreateUserRoutes()
  CreatePostRoutes()
}).prefix('/v1');