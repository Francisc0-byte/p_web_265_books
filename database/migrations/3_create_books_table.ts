import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'books'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      //Ajout des colonnes 
      table.string('title').unique()
      table.integer('number_of_Pages')
      table.string('pdf_link').unique()
      table.string('abstract').notNullable()
      table.string('editor').notNullable()
      table.integer('edition_year').notNullable()
      table.string('image_path').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}