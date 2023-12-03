import { AuthRepository } from "./repository";
import { AuthService } from "./service";

export const CreateAuthService = (): AuthService => {
    const repository = new AuthRepository()
    return new AuthService(repository)
}