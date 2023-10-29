import { rules, schema } from "@ioc:Adonis/Core/Validator";

export type PostType = {
    id?: number;
    user_id: number;
    title: string;
    text?: string;
    thumb?: string;
}

export type PostParamsType = {
    user_id?: number;
    title?: string;
}

export const PostCreateRequest = schema.create({
    user_id: schema.number([
        rules.required()
    ]),
    title: schema.string({ trim: true }, [
        rules.maxLength(200),
        rules.required()
    ]),
    text: schema.string({ trim: true }, [
        rules.maxLength(800)
    ]),
    thumb: schema.string({ trim: true }, [
        rules.maxLength(300)
    ]),
})

export const PostParams = schema.create({
    user_id: schema.number(),
    title: schema.string({ trim: true }, [
        rules.maxLength(200),
    ])
})

export const PostUpdateRequest = schema.create({
    id: schema.number(),
    user_id: schema.number([
        rules.required()
    ]),
    title: schema.string({ trim: true }, [
        rules.maxLength(200),
        rules.required()
    ]),
    text: schema.string({ trim: true }, [
        rules.maxLength(800)
    ]),
    thumb: schema.string({ trim: true }, [
        rules.maxLength(300)
    ]),
})
