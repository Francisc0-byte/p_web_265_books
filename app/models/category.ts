import { BaseModel, column, hasOne, /*hasOne*/ } from '@adonisjs/lucid/orm'
import Book from './book.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  //unique champ de l'entité
  @column()
  declare label:string
  //relation: 1 Book ->

  @hasOne(()=>Book)
  declare book: HasOne<typeof Book>
}