import Post from "App/Models/Post";
import { PostParamsType, PostType } from "./interface";
import { PostRepository } from "./repository";

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
}