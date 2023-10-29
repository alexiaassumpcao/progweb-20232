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

export const UserUpdateRequestFactory = (id: string, name: string, email: string, description: string) : UserType =>  {
    const idAsNumber = parseInt(id)
    return {
        id: idAsNumber,
        name: name,
        email: email,
        description: description
    } as UserType;
}