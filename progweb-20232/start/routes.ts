import Route from '@ioc:Adonis/Core/Route'
import { CreateAuthRoutes } from './auth/routes'
import { CreateUserRoutes, } from './user/routes'
import { CreatePostRoutes } from './post/routes'

Route.get('/', async ({ view }) => {
  return view.render('users/welcome')
})

Route.get('/health', async ({ response }) => {
  return response.send('OK')
})

Route.get('/login', async ({ view }) => {
  return view.render('users/login')
})

Route.get('/register', async ({ view }) => {
  return view.render('users/register')
})

Route.get('/favposts', async ({ view }) => {
  return view.render('users/fav-posts')
})

Route.get('/posts', async ({ view }) => {
  return view.render('users/posts')
})

Route.get('/profile', async ({ view }) => {
  return view.render('users/profile')
})

Route.group(() => {
  CriaRotaAuth()
  CriaRotaUser()
}).prefix('/v1')


  CreateAuthRoutes()
  CreateUserRoutes()
  CreatePostRoutes()
}).prefix('/v1');