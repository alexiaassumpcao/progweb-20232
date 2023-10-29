import { UserFactory, UserType, UserUpdateRequestFactory } from "App/interfaces/usuario"
import { UserRepository } from "./repository"
import { UserService } from "./service"

export const CreateUserService = (): UserService => {
    const repository = new UserRepository()
    return new UserService(repository)
}

export const CreateUserCreateRequestBody = (request): UserType => {
    const email = request.input('email', undefined)
    const name = request.input('name', undefined)
    const description = request.input('description', undefined)
    return UserFactory(name, email, description)
}

export const CreateUserUpdateRequestBody = (params, request): UserType => {
    const email = request.input('email', undefined)
    const name = request.input('name', undefined)
    const description = request.input('description', undefined)

    const id = params.id;
    return UserUpdateRequestFactory(id, name, email, description)
}