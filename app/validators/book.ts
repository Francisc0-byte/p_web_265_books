import vine from '@vinejs/vine'

const bookValidator = vine.compile(
  vine.object({
    title: vine.string().minLength(2).maxLength(255),
    numberOfPages: vine.number(),
    pdfLink: vine.string().minLength(2).maxLength(255),
    abstract: vine.string().minLength(2).maxLength(255),
    editor: vine.string().minLength(2).maxLength(255),
    editionYear: vine.number(),
    imagePath: vine.number()
  })
)
export {bookValidator}