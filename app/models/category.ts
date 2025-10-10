import { BaseModel, column, hasMany, hasOne, /*hasOne*/ } from '@adonisjs/lucid/orm'
import Book from './book.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  //unique champ de l'entité
  @column()
  declare label:string
  //relation: 1 Book ->

  @hasMany(()=>Book)
  declare book: HasMany<typeof Book>
}