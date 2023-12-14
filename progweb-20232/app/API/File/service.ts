import type { MultipartFileContract } from '@ioc:Adonis/Core/BodyParser'
import Application from '@ioc:Adonis/Core/Application'
import File from 'App/Models/File'

export default class FileService {
    constructor() {}

    public async create(data: MultipartFileContract) {
        try {
            console.log("oi to no file service")
        await data.move(Application.tmpPath('uploads'))

        const file = {
            fileName: data.fileName as string
        } as File

        console.log('file: ', file)

        await file.save()

        } catch(error) {
            console.log(error)
            return error
        }
        
    }
}