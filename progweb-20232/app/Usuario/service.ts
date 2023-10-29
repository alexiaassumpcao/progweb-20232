import { UserRepository } from "./repository";
import { UserType } from "App/interfaces/usuario";

export class UserService {
    repository: UserRepository;
    constructor(repo: UserRepository) {
        this.repository = repo
    }

    async createUser(newUser: UserType) : Promise<number | undefined>{
        try {
            const user = await this.repository.createUser(newUser)
            return user.id
        } catch {
            console.log("error on create user service")
        }
    }
}