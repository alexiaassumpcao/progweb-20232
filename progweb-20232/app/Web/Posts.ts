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
  }
  public async searchPosts({ view, auth, request }: HttpContextContract) {
    if (auth.isAuthenticated) {
      let params = await request.qs()
      params.user_id = auth.user?.user_id 
      const svc = CreatePostService()
                
      const posts = await svc.listPosts(params)
      return view.render('posts/posts', { posts: posts })
    }
  }
  public async searchFavPosts({ view, auth, request }: HttpContextContract) {
    if (auth.isAuthenticated) {
      let params = await request.qs()
      params.user_id = auth.user?.user_id 
      const svc = CreatePostService()
      console.log("params: ", params)
                
      const favPosts = await svc.searchFavPost(params.title as string, params.user_id)
      return view.render('posts/fav-posts', { favPosts: favPosts })
    }
  }

    public async favList({ view, auth }: HttpContextContract) {
      if (auth.isAuthenticated) {
        const svc = CreatePostService()
        const favPosts = await svc.listFavpost(auth.user?.user_id as number)
      
        return view.render('posts/fav-posts', { favPosts: favPosts })
      }
      
    }

}