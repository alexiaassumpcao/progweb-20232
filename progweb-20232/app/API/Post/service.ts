import Post from "App/Models/Post";
import { PostParamsType, PostType } from "./interface";
import { PostRepository } from "./repository";
import File from "App/Models/File";
import Application from '@ioc:Adonis/Core/Application'
import FavPost from "App/Models/FavPost";

export class PostService {
    repository: PostRepository;
    constructor(repo: PostRepository) {
        this.repository = repo
    }

    async listPosts(params: PostParamsType): Promise<Post[] | undefined> {
        try {
            const posts = await this.repository.list(params)
            return posts
        } catch(error){
            console.error("error on list posts service: ", error)
            return error
        }
    }

    async createPost(newPost: PostType): Promise<Post | undefined> {
        try {
            const post = await this.repository.create(newPost)
            return post
        } catch(error) {
            console.error("erro on create post service: ", error)
            return error
        }
    }

    async updatePost(postToUpdate: PostType): Promise<Post | undefined> {
        try {
            const post = await this.repository.update(postToUpdate)
            return post
        } catch(error) {
            console.error("error on update post service: ", error)
            return error
        }
    }
    
    async getPostByID(postID: number): Promise<Post | undefined> {
        try {
            const post = await this.repository.getByID(postID)
            return post
        } catch(error) {
            console.error("error on get post by id service: ", error)
            return error
        }
    }

    async deletePostByID(postId: number) {
        try {
            return await this.repository.delete(postId)
        } catch (error) {
            console.error("error on delete post by id service: ", error)
            return error
        }
    }

    async favPost(userId: number, postId: number) {
        try {
            return await this.repository.favPost(userId, postId)
        } catch (error) {
            console.error("error on fav post service: ", error)
            return error
        }
    }

    async listFavpost(userId: number) {
        try {
            return await this.repository.listFavPosts(userId)
        } catch(error) {
            console.error("error on list fav posts service: ", error)
            return error
        }
    }
    
    async searchFavPost(title: string, userId: number) {
        try {
            return await this.repository.searchFavPosts(title, userId)
        } catch(error) {
            console.error("error on search fav posts service: ", error)
            return error
        }
    }

    async isFavPost(userId: number, postId: number) {
        try {
            const isFav = await this.repository.isFavPost(userId, postId)
            return {
                postId: postId,
                userId: userId,
                isFavPost: isFav
            }
        } catch(error) {
            console.error("error on is fav post service: ", error)
            return error
        }
    }
        public async createThumb(data: any) {
          await data.move(Application.tmpPath('uploads'))
      
          const file = new File()
          file.fileName = data.fileName
      
          await file.save()
      
          return file
        }
        public async getThumb(thumb: number) {
            try {
                const thumbFound = await this.repository.findThumb(thumb)
                return thumbFound
            } catch(error) {
                console.error("error on get thumb service: ", error)
                return error
            }
        }
}