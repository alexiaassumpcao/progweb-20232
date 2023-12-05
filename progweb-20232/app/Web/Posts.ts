/* eslint-disable prettier/prettier */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CreatePostService } from '../API/Post/utils'

export default class WebCustomPostController {
    public async show({ view, auth, params } : HttpContextContract) {
        if (auth.isAuthenticated) {
            const svc = CreatePostService()
      
            const post = await svc.getPostByID(params.id)
            return view.render('posts/show', { post: post })
          }
    }

    public async list({ view, auth, params } : HttpContextContract) {
        if (auth.isAuthenticated) {
            const svc = CreatePostService()
            const posts = await svc.listPosts({ user_id: String(auth.user?.user_id) })
        
            return view.render('posts/posts', { posts: posts })
          }
        if (auth.isAuthenticated) {
            const svc = CreatePostService()
      
            const post = await svc.getPostByID(params.id)
            return view.render('posts/show', { post: post })
          }
    }

    public async favList({ view }: HttpContextContract) {
            return view.render('posts/fav-posts')
          
    }

}