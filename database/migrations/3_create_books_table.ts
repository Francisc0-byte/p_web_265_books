import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'books'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      //Ajout des colonnes 
      table.string('title').unique()
      table.integer('numberOfPages')
      table.string('pdfLink').unique()
      table.string('abstract').notNullable
      table.string('Editor').notNullable
      table.string('editionYear').notNullable
      table.string('imagePath').notNullable

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}