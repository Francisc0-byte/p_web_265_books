import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import Category from './category.js'

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

  // Relation book -> category
  @belongsTo(() => Category)
  declare category: BelongsTo<typeof Category>
  // Relation : book -> user
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}