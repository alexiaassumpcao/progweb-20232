export type UserType = {
    id?: number;
    name: string;
    email: string;
    description: string;
}


export const UserFactory = (name: string, email: string, description: string) : UserType =>  {
    return {
        name: name,
        email: email,
        description: description
    } as UserType;
}