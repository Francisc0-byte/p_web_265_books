import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare numberOfPages: number

  @column()
  declare pdfLink: string //C'est un lien HTTPS vers une autre page 

  @column()
  declare abstract: string

  @column()
  declare editor: string

  @column()
  declare editionYear: number 

  @column()
  declare imagePath: string // C'est une image
}