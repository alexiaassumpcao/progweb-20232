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

Route.get('/login', webCustomUserController.login).as('webauth.login')
Route.post('/login', customAuthController.login).as('auth.login')
Route.post('/logout', customAuthController.logout).as('auth.logout')

Route.get('/register', webCustomUserController.register).as('webauth.register')
Route.post('/register', customUserController.create).as('user.create')
Route.post('/register/:id', customUserController.update).as('user.patch')


Route.get('/auth', webCustomUserController.createAuth).as('webauth.create')
Route.post('/auth', customAuthController.create).as('auth.create')


Route.get('/favposts', webCustomPostController.favList).as('fav.list')
Route.post('/post', customPostController.create).as('post.create')
Route.get('/posts', webCustomPostController.list).as('posts.list')
Route.get('/posts/:id', webCustomPostController.show).as('posts.show')

Route.get('/profile',webCustomUserController.show).as('profile.show')
