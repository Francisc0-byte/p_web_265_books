import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      //user ->commment
      table
      .integer('user_id')
      .unsigned()
      .notNullable() //important: un commentaire doit toujours être lié à un élève
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')

//book ->commment
      table
      .integer('book_id')
      .unsigned()
      .notNullable() //important: un commentaire doit toujours être lié à un élève
      .references('id')
      .inTable('books')
      .onDelete('CASCADE')

    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}