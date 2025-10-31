import vine from '@vinejs/vine'

const bookValidator = vine.compile(
  vine.object({
    title: vine.string().minLength(2).maxLength(255),
    numberOfPages: vine.number(),
    pdfLink: vine.string().minLength(2).maxLength(255),
    abstract: vine.string().minLength(2).maxLength(255),
    editor: vine.string().minLength(2).maxLength(255),
    editionYear: vine.number(),
    imagePath: vine.string(),

    userId: vine.number().exists(async (db, value) => {
      // Ajout Jessica
      const user = await db.from('users').where('id', value).first() // Exemple cours avec (s) pour users
      // user est soit un objet (si trouvé), soit undefined (si non trouvé).
      // Explication du !!user :
      // Si user est un objet → !!user devient true
      // Si user est undefined → !!user devient false
      return !!user
    }),
  })
)
export { bookValidator }
