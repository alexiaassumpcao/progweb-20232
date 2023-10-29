import User from "App/Models/User"
import { UserType } from "App/interfaces/usuario"

export class UserRepository {
    async list():Promise<User[]> {
        const users = await User.all()
        return users
    }

    async getByID(userID: number): Promise<User | null> {
        const user = await User.find(userID)
        return user
    }

    async createUser(newUser: UserType) :Promise<User> {
        const createdUser = await User.create(newUser)
        return createdUser
    }
}