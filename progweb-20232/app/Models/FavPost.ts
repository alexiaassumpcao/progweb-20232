import { DateTime } from 'luxon'
import { BaseModel, column, scope, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Post from './Post'

export default class FavPost extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public post_id: number

  @hasOne(() => Post, {
    foreignKey: 'id', 
  })
  public posts: HasOne<typeof Post>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime()
  public deleted_at: DateTime
}
