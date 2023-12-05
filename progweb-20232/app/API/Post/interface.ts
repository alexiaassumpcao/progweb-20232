import { rules, schema } from "@ioc:Adonis/Core/Validator";
import File from "App/Models/File";

export type PostType = {
    id?: number;
    user_id: number;
    title: string;
    text?: string;
    thumb?: any;
}

export type PostParamsType = {
    user_id?: string;
    title?: string;
}

export const PostCreateRequest = schema.create({
    user_id: schema.number.optional(),
    title: schema.string({ trim: true }, [
        rules.maxLength(200),
        rules.required()
    ]),
    text: schema.string.optional({ trim: true }, [
        rules.maxLength(800)
    ]),
    thumb: schema.file({
        size: '2mb',
        extnames: ['jpg', 'gif', 'png'],
      }),
})

export const PostParams = schema.create({
    user_id: schema.number.optional(),
    title: schema.string.optional({ trim: true }, [
        rules.maxLength(200),
    ])
})

export const PostUpdateRequest = schema.create({
    id: schema.number.optional(),
    user_id: schema.number.optional(),
    title: schema.string({ trim: true }, [
        rules.maxLength(200),
        rules.required()
    ]),
    text: schema.string.optional({ trim: true }, [
        rules.maxLength(800)
    ]),
    thumb: schema.file({
        size: '2mb',
        extnames: ['jpg', 'gif', 'png'],
      }),
})
