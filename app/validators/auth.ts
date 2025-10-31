import vine from '@vinejs/vine'

export const loginValidator = vine.compile(
  // Ajouter par Jess
  vine.object({
    username: vine.string().minLength(3).maxLength(32),
    password: vine.string().minLength(8).maxLength(512),
  })
)
export const registerValidator = vine.compile(
  vine.object({
    username: vine
      .string()
      .minLength(3)
      .maxLength(32)
      .unique(async (query, field) => {
        const user = await query.from('user').where('username', field).first() // Elimination du (s) de users
        return !user
      }),
    password: vine.string().minLength(8).maxLength(512),
  })
)
