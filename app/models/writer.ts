import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Writer extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare lastname: string

  @column()
  declare firstname: number
}
