import User from "App/Models/User"
import { UserType } from "App/User/interface"

export class UserRepository {
    idField: "id"
    emailField: "email"
    async list():Promise<User[]> {
        const users = await User.all()
        return users
    }

    async findByID(userID: number): Promise<User | null> {
        const user = await User.findByOrFail(this.idField, userID)
        return user
    }

    async findByEmail(email: string): Promise<User | null> {
        console.log(this.emailField)
        const user = await User.findByOrFail(this.emailField, email)
        return user
    }

    async create(newUser: UserType) :Promise<User> {
        const createdUser = await User.create(newUser)
        return createdUser
    }

    async update(userToUpdate: UserType): Promise<User> {
        const userUpdated = await User.updateOrCreate(userToUpdate, userToUpdate)
        return userUpdated
    }

    async delete(userID: number) {
        const user = await User.findByOrFail(this.idField, userID)
        await user.delete()
    }
}