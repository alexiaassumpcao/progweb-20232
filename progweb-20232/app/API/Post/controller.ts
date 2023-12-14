/* eslint-disable prettier/prettier */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { PostCreateRequest, PostType, PostUpdateRequest } from '../../API/Post/interface'
import { CreatePostService } from '../../API/Post/utils'
//import FileService from '../File/service'

export default class CustomPostController {
    public async create({ request, response, auth }: HttpContextContract) {
        try {
            if (auth.isAuthenticated) {
                //const fileSvc = new FileService()
                //const thumbName = request.input("thumb")
                //await fileSvc.create(thumbName)
                var newPost = await request.validate({ schema: PostCreateRequest})
                newPost.user_id = auth.user?.user_id
                const svcType = newPost as PostType;
                const svc = CreatePostService()
                
                const createdPost = await svc.createPost(svcType)
                if (createdPost) {
                    return response.redirect('/posts')
                }
            } else {
                response.status(401)
                response.send("Unauthorized")
            }
        } catch (error) {
            return error
        }
    }

    public async update({ params, request, response, auth }: HttpContextContract) {
        try {
            if (auth.isAuthenticated) {
                var postToUpdate = await request.validate({ schema: PostUpdateRequest })
                postToUpdate.id = parseInt(params.id)
                postToUpdate.user_id = auth.user?.user_id
                const svc = CreatePostService()
                const postUpdated = await svc.updatePost(postToUpdate as PostType)
                response.status(200)
                return postUpdated
            } else {
                response.status(401)
                response.send("Unauthorized")
            }
           
        } catch(error) {
            return error
        }
    }

    public async getByID({ params, auth, response }: HttpContextContract) {
        try {
            if(auth.isAuthenticated) {
                const id = parseInt(params.id)
                const svc = CreatePostService()
                const post = await svc.getPostByID(id)
                return post
            } else {
                response.status(401)
                response.send("Unauthorized")
            }
        } catch(error) {
            return error
        }
    }

    public async deleteByID({ params, response, auth }: HttpContextContract) {
        try {
            if (auth.isAuthenticated) {
                const id = parseInt(params.id)
                const svc = CreatePostService()
                await svc.deletePostByID(id)
                response.status(204)
            } else {
                response.status(401)
                response.send("Unauthorized")
            }
        } catch (error) {
            return error
        }
    }

    public async list({ request, auth, response }: HttpContextContract) {
        try {
            if(auth.isAuthenticated) {
                const params = await request.qs()
                const svc = CreatePostService()
                
                const posts = await svc.listPosts(params)
                return posts
            } else {
                response.status(401)
                response.send("Unauthorized")
            }
        } catch(error) {
            return error
        }
    }

    public async favPost({ auth, response, params }: HttpContextContract) {
        try {
            if(auth.isAuthenticated) {
                const postId = parseInt(params.id)
                const userId = auth.user?.user_id as number

                const svc = CreatePostService()
                await svc.favPost(userId, postId)
                response.status(204)
            } else {
                response.status(401)
                response.send("Unauthorized")
            }
        } catch(error) {
            return error
        }
    }

    public async listFavPosts({ auth, response }: HttpContextContract) {
        try {
            if(auth.isAuthenticated) {
                const userId = auth.user?.user_id as number

                const svc = CreatePostService()
                const list = await svc.listFavpost(userId)
                return list
            } else{
                response.status(401)
                response.send("Unauthorized")
            }
        } catch(error) {
            return error
        }
    }

    public async isFavPost({ auth, response, params }: HttpContextContract) {
        try {
            if(auth.isAuthenticated) {
                const postId = parseInt(params.id)
                const userId = auth.user?.user_id as number

                const svc = CreatePostService()
                const result = await svc.isFavPost(userId, postId)
                return result
            } else {
                response.status(401)
                response.send("Unauthorized")
            }
        } catch(error) {
            return error
        }
    }
}