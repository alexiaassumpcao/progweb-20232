import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'auths'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('user_id')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
        table.dropColumn('user_id')
    })
  }
}
