import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.dropTableIfExists(this.tableName)
    this.schema.createTableIfNotExists(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 180).notNullable().unique()
      table.string('description', 255).notNullable()
      table.string('email', 255).nullable().unique()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
