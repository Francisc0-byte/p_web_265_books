import { DateTime } from 'luxon'
import { BaseModel, column, /*hasOne*/ } from '@adonisjs/lucid/orm'
//import Book from './book.js'
//import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  //unique champ de l'entité
  @column()
  declare label:string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  //relation: 1 Book ->
/*
  @hasOne(()=>Book)
  declare book: HasOne<typeof Book>
*/
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}