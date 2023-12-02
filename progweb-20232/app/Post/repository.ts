import Post from "App/Models/Post";
import { PostParamsType, PostType } from "./interface";


export class PostRepository {
    idField = "id"
    userIDField = 'user_id'
    titleField = 'title'


    async list(params: PostParamsType): Promise<Post[]> {
        if (params.user_id != undefined) {
            const posts = await Post.query().where(this.userIDField, params.user_id)
            return posts
        }
        if (params.title != undefined) {
            const posts = await Post.query().where(this.titleField, 'LIKE', "%"+params.title+"%")
            return posts
        }
        return await Post.all()
    }

    async getByID(postID: number): Promise<Post> {
        return await Post.findOrFail(postID)
    }

    async create(newPost: PostType): Promise<Post> {
        return await Post.create(newPost)
    }

    async update(postToUpdate: PostType): Promise<Post> {
        return await Post.updateOrCreate({ id: postToUpdate.id }, postToUpdate)
    }

    async delete(postID: number) {
        const post = await Post.findByOrFail(this.idField, postID)
        return await post.delete()
    }
}