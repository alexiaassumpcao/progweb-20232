import Route from '@ioc:Adonis/Core/Route'
import { CreateAuthRoutes } from './auth/routes'
import { CreateUserRoutes } from './user/routes'
import { CreatePostRoutes } from './post/routes'
import Post from 'App/Models/Post'
import User from 'App/Models/User'

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
Route.patch('/register/:id', 'UserController.update').as('user.update')

Route.post('/post', 'PostController.create').as('post.create')

Route.get('/auth', async ({ view }) => {
  return view.render('users/auth')
})

Route.post('/auth', 'AuthController.create').as('auth.create')

Route.post('/logout', 'AuthController.logout').as('auth.logout')


Route.get('/favposts', async ({ view }) => {
  return view.render('users/fav-posts')
})

Route.get('/posts', async ({ view, auth }) => {
  if (auth.isAuthenticated) {
    const posts = await Post.query().where("user_id", auth.user?.id as number)

    return view.render('users/posts', { posts: posts })
  }
})

Route.get('/posts/:id', async ({ view, auth, params }) => {
  if (auth.isAuthenticated) {

    const post = await Post.findOrFail(params.id)

    return view.render('users/show', { post: post })
  }
}).as('posts.show')

Route.get('/profile', async ({ view, auth }) => {
  if(auth.isAuthenticated) {
    const user = await User.findByOrFail('id',auth.user?.id) 
    return view.render('users/profile', { user: user })
  }
})


Route.group(() => {
  CreateAuthRoutes()
  CreateUserRoutes()
  CreatePostRoutes()
}).prefix('/v1')
