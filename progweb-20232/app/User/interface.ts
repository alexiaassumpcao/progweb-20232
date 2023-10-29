import { rules, schema } from "@ioc:Adonis/Core/Validator";

export type UserType = {
    id?: number;
    name: string;
    email: string;
    description: string;
}

export const UserCreateRequestSchema = schema.create({
    name: schema.string({ trim: true }, [
        rules.maxLength(180),
        rules.required()
    ]),
    email: schema.string({ trim: true }, [
        rules.email(),
        rules.maxLength(200),
        rules.required()
    ]),
    description: schema.string({ trim: true }, [
        rules.maxLength(300)
    ]),
  })

  export const UserUpdateRequestSchema = schema.create({
    id: schema.number(),
    name: schema.string({ trim: true }, [
        rules.maxLength(180),
        rules.required()
    ]),
    email: schema.string({ trim: true }, [
        rules.email(),
        rules.maxLength(200),
        rules.required()
    ]),
    description: schema.string({ trim: true }, [
        rules.maxLength(300)
    ]),
  })
