import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import Book from './book.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Comment from './comment.js'
import Evaluate from './evaluate.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['username'],
  passwordColumnName: 'hashPassword',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare username: string | null

  @column({ })
  declare hashPassword: string

  @column()
  declare isAdmin :boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
  
  @hasMany(()=> Book)
  declare book: HasMany<typeof Book>

  @hasMany(()=>Comment)
  declare comment:HasMany<typeof Comment>

  @hasMany(()=> Evaluate)
  declare user:HasMany<typeof Evaluate>

  static accessTokens = DbAccessTokensProvider.forModel(User)
}