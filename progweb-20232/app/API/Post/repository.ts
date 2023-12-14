import Post from "App/Models/Post";
import { PostParamsType, PostType } from "./interface";
import FavPost from "App/Models/FavPost";
import { DateTime } from "luxon";
import File from "App/Models/File";


export class PostRepository {
    // Table posts fields
    postIdField = "id"
    postUserIDField = 'user_id'
    postTitleField = 'title'

    // Table fav-posts fields
    favIdField = "id"
    favPostIdField = "post_id"
    favUserIdField = "user_id"
    favDeletedAtField = "deleted_at"

    async list(params: PostParamsType): Promise<Post[]> {
        if (params.title !== undefined && params.user_id !== undefined) {
            const posts = await Post.query().where(this.postUserIDField, params.user_id).andWhere(this.postTitleField, 'LIKE', "%"+params.title+"%")
            return posts
        }
        if (params.user_id !== undefined) {
            const posts = await Post.query().where(this.postUserIDField, params.user_id)
            return posts
        }
        if (params.title !== undefined) {
            const posts = await Post.query().where(this.postTitleField, 'LIKE', "%"+params.title+"%")
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
        const post = await Post.findByOrFail(this.postIdField, postID)
        return await post.delete()
    }

    async favPost(userID: number, postID: number) {
        const favPost = await FavPost.find({ user_id: userID, post_id: postID })
        if (favPost === null) {
            return await FavPost.create({ user_id: userID, post_id: postID })
        } else {
            favPost.deleted_at = DateTime.now()
            return await FavPost.updateOrCreate({ id: favPost.id }, favPost)
        }
    }

    async listFavPosts(userID: number) {
        let favPosts = await FavPost.query().where(this.favUserIdField, userID).preload('posts');
        favPosts = favPosts.filter((post) => post.deleted_at == null)

        const completedPosts = favPosts.map((p) => p.posts)
        return completedPosts
    }
    async searchFavPosts(title: string, userID: number) {
        let favPosts = await FavPost.query().where(this.favUserIdField, userID).preload('posts');
        favPosts = favPosts.filter((post) => post.deleted_at == null)
        let completedPosts = favPosts.map((p) => p.posts)
        completedPosts = completedPosts.filter((post) => post.title.indexOf(title) !== -1)
        return completedPosts
    }

    async isFavPost(userID: number, postID: number) {
        const favPost = await FavPost.find({ user_id: userID, post_id: postID })
        return favPost !== null
    }
    async findThumb(thumb: number) {
        const thumbFound = await File.findOrFail(thumb)
        return thumbFound
    }
}