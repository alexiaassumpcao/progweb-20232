import type { MultipartFileContract } from '@ioc:Adonis/Core/BodyParser'
import Application from '@ioc:Adonis/Core/Application'
import File from 'App/Models/File'

export default class FileService {
    constructor() {}

    public async create(data: MultipartFileContract) {
        try {
            await data.move(Application.tmpPath('uploads'))

            const file = {
                fileName: data.fileName as string
            } as File

            await file.save()

        } catch(error) {
            console.error(error)
            return error
        }
        
    }
}