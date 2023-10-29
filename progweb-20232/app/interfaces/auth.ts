export type AuthType = {
    id?: number;
    idUser: number;
    email: string;
    password: string;
};


export const AuthFactory = (idUser: number, password: string, email: string) : AuthType => {
    return {
        idUser: idUser,
        password: password,
        email: email
    } as AuthType;
}
