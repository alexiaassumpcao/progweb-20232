import User from "App/Models/User";
import { UserRepository } from "./repository";
import { UserType } from "App/User/interface";

export class UserService {
    repository: UserRepository;
    constructor(repo: UserRepository) {
        this.repository = repo
    }

    async createUser(newUser: UserType) : Promise<User | undefined>{
        try {
            const user = await this.repository.create(newUser)
            return user
        } catch (error) {
            console.error("error on create user service: ", error)
            return error
        }
    }

    async updateUser(userToUpdate: UserType) : Promise<User | undefined>{
        try {
            const user = await this.repository.update(userToUpdate)
            return user
        } catch (error) {
            console.error("error on update user service: ", error)
            return error
        }
    }

    async listUsers(): Promise<User[] | undefined> {
        try {
            const users = await this.repository.list()
            return users
        } catch (error) {
            console.error("error on list users service: ", error)
            return error
        }
    }

    async getUserByID(userID: number): Promise<User | undefined> {
        try {
            const user = await this.repository.findByID(userID);
            return user as User;
        } catch (error) {
            console.error("error on get user by id service: ", error)
            return error
        }
    }

    async deleteUser(userID: number) {
        try {
            await this.repository.delete(userID)
        } catch(error) {
            console.error("error on delete user service: ", error)
            return error
        }
    }
}