/* eslint-disable prettier/prettier */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { PostCreateRequest, PostParams, PostUpdateRequest } from '../../Post/interface'
import { CreatePostService } from '../../Post/utils'

export default class PostController {
    public async create({ request, response }: HttpContextContract) {
        try {
            const newPost = await request.validate({ schema: PostCreateRequest})
            const svc = CreatePostService()
            const createdPost = await svc.createPost(newPost)
            response.status(201)
            return createdPost
        } catch (error) {
            return error
        }
    }

    public async update({ params, request, response }: HttpContextContract) {
        try {
            var postToUpdate = await request.validate({ schema: PostUpdateRequest })
            postToUpdate.id = parseInt(params.id)
            const svc = CreatePostService()
            const postUpdated = await svc.updatePost(postToUpdate)
            response.status(200)
            return postUpdated
        } catch(error) {
            return error
        }
    }

    public async getByID({ params }: HttpContextContract) {
        try {
            const id = parseInt(params.id)
            const svc = CreatePostService()
            const post = await svc.getPostByID(id)
            return post
        } catch(error) {
            return error
        }
    }

    public async deleteByID({ params, response }: HttpContextContract) {
        try {
            const id = parseInt(params.id)
            const svc = CreatePostService()
            await svc.deletePostByID(id)
            response.status(204)
        } catch (error) {
            return error
        }
    }

    public async list({ request }: HttpContextContract) {
        try {
            const params = await request.qs()
            const svc = CreatePostService()
            
            const posts = await svc.listPosts(params)
            return posts
        } catch(error) {
            return error
        }
    }
}