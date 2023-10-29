import User from "App/Models/User";
import { UserRepository } from "./repository";
import { UserType } from "App/interfaces/usuario";

export class UserService {
    repository: UserRepository;
    constructor(repo: UserRepository) {
        this.repository = repo
    }

    async createUser(newUser: UserType) : Promise<number | undefined>{
        try {
            const user = await this.repository.create(newUser)
            return user.id
        } catch (error) {
            console.error("error on create user service: ", error)
        }
    }

    async updateUser(userToUpdate: UserType) : Promise<User | undefined>{
        try {
            const user = await this.repository.update(userToUpdate)
            return user
        } catch (error) {
            console.error("error on update user service: ", error)
        }
    }

    async listUsers(): Promise<User[] | undefined> {
        try {
            const users = await this.repository.list()
            return users
        } catch (error) {
            console.error("error on list users service: ", error)
        }
    }

    async getUserByID(userID: number): Promise<User | undefined> {
        try {
            const user = await this.repository.findByID(userID);
            return user as User;
        } catch (error) {
            console.error("error on get user by id service: ", error)
        }
    }

    async deleteUser(userID: number) {
        try {
            await this.repository.delete(userID)
        } catch(error) {
            console.error("error on delete user service: ", error)
        }
    }
}