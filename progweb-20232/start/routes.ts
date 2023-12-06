import Route from '@ioc:Adonis/Core/Route'
import CustomAuthController from 'App/API/Auth/controller'
import CustomPostController from 'App/API/Post/controller'
import CustomUserController from 'App/API/User/controller'
import WebCustomPostController from 'App/Web/Posts'
import WebCustomUserController from 'App/Web/Users'

// Web controllers
const webCustomUserController = new WebCustomUserController()
const webCustomPostController = new WebCustomPostController()

// API controllers
const customAuthController = new CustomAuthController()
const customUserController = new CustomUserController()
const customPostController = new CustomPostController()


Route.get('/', async ({ view }) => {
  return view.render('users/welcome')
})

Route.get('/health', async ({ response }) => {
  return response.send('OK')
})

// routes related to auth
Route.get('/login', webCustomUserController.login).as('webauth.login')
Route.post('/api/login', customAuthController.login).as('auth.login')
Route.post('/api/logout', customAuthController.logout).as('auth.logout')
Route.get('/auth', webCustomUserController.createAuth).as('webauth.create')
Route.post('/api/auth', customAuthController.create).as('auth.create')

// routes related to users
Route.get('/register', webCustomUserController.register).as('webauth.register')
Route.post('/api/register', customUserController.create).as('user.create')
Route.post('/api/register/:id', customUserController.update).as('user.patch')
Route.delete('/api/register/:id', customUserController.deleteByID).as('user.delete')
Route.get('/api/users', customUserController.list).as('user.list')
Route.get('/api/users/:id', customUserController.getByID).as('user.getById')
Route.get('/profile',webCustomUserController.show).as('profile.show')

// routes related to posts
Route.get('/favposts', webCustomPostController.favList).as('fav.list')
Route.post('/api/posts', customPostController.create).as('post.create')
Route.get('/posts', webCustomPostController.list).as('posts.list')
Route.get('/api/posts', customPostController.list).as('post.list')
Route.get('/posts/:id', webCustomPostController.show).as('posts.show')
Route.put('/api/posts/:id', customPostController.update).as('post.update')
Route.get('/api/posts/:id', customPostController.getByID).as('post.getById')
Route.delete('/api/posts/:id', customPostController.deleteByID).as('post.delete')

// fav posts routes
Route.put('/api/posts/:id/fav-posts', customPostController.favPost).as('favpost.put')
Route.get('/api/posts/fav-posts', customPostController.listFavPosts).as('favpost.list')
Route.get('/api/posts/:id/fav-posts', customPostController.isFavPost).as('favpost.is')


