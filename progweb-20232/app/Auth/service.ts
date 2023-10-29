import { AuthType } from "App/interfaces/auth";
import { AuthRepository } from "./repository";

export class AuthService {
    repository: AuthRepository;
    constructor(authRepository: AuthRepository) {
        this.repository = authRepository;
    }

    async listAuths() {
        return await this.repository.listAuths()
    }

    async createAuth(newAuth: AuthType): Promise<number | undefined> {
        try {
            const createdAuth = await this.repository.createAuth(newAuth)
            return createdAuth.id
        } catch {
            console.error("error to create new auth")
        }  
    } 
}