import { UserRepository } from "./repository"
import { UserService } from "./service"

export const CreateUserService = (): UserService => {
    const repository = new UserRepository()
    return new UserService(repository)
}