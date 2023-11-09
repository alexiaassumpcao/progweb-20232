import { rules, schema } from "@ioc:Adonis/Core/Validator";

export type AuthType = {
    id?: number;
    user_id: number;
    email: string;
    password: string;
};

export const AuthCreateRequest = schema.create({
    user_id: schema.number([
        rules.required()
    ]),
    email: schema.string({ trim: true }, [
        rules.email(),
        rules.maxLength(255),
        rules.required()
    ]),
    password: schema.string({ trim: true }, [
        rules.required(),
        rules.maxLength(180)
    ]),
})

export const AuthUpdateRequest = schema.create({
    id: schema.number(),
    user_id: schema.number([
        rules.required()
    ]),
    email: schema.string({ trim: true }, [
        rules.email(),
        rules.maxLength(255),
        rules.required()
    ]),
    password: schema.string({ trim: true }, [
        rules.required(),
        rules.maxLength(180)
    ]),
})