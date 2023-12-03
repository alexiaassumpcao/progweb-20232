import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CreatePostService } from 'App/API/Post/utils'

export default class WebCustomFileController {
  public async show({ params, response }: HttpContextContract) {
    const svc = CreatePostService()
    const file = await svc.getThumb(params.id)

    return response.stream(file.stream)
  }
}