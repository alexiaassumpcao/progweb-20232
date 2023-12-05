import { PostRepository } from "./repository"
import { PostService } from "./service"

export const CreatePostService = () => {
    const repository = new PostRepository()
    return new PostService(repository)
}