import Route from '@ioc:Adonis/Core/Route'
import { CreateAuthRoutes } from './auth/routes'
import { CreateUserRoutes } from './user/routes'
import { CreatePostRoutes } from './post/routes'
import AuthController from 'App/Controllers/Http/AuthController'

Route.get('/', async ({ view }) => {
  return view.render('users/welcome')
})

Route.get('/health', async ({ response }) => {
  return response.send('OK')
})

Route.get('/login', async ({ view }) => {
  return view.render('users/login')
})

Route.post('/login', 'AuthController.login').as('auth.login')

Route.get('/register', async ({ view }) => {
  return view.render('users/register')
})

Route.post('/register', 'UserController.create').as('user.create')

Route.post('/post', 'PostController.create').as('post.create')

Route.get('/auth', async ({ view }) => {
  return view.render('users/auth')
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
  CreateAuthRoutes()
  CreateUserRoutes()
  CreatePostRoutes()
}).prefix('/v1')
