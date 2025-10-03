import type { HttpContext } from '@adonisjs/core/http'

import Book from "#models/book"
//import { request } from 'http'
import { bookValidator } from '#validators/book'

export default class BooksController {

  async index({ response}: HttpContext) {
    //Correspond à la requête HTTP get / book
    const book = await Book.query()
      .orderBy('title')
      .orderBy('numberOfPages')
      .orderBy('pdfLink')
      .orderBy('abstract')
      .orderBy('editor')
      .orderBy('editionYear')
      .orderBy('imagePath')
    console.log(book.length)
    return response.ok(book)
  }

  async store({request, response}: HttpContext) {
    // Récupération des données envoyées par le client
    // Récupère les données envoyés par le client et validation des données
    const {title, numberOfPages, pdfLink, abstract, editor, editionYear, imagePath} = await request.validateUsing(bookValidator)
    // Création du livre avec les données validées
    const book = await Book.create({
      title,
      numberOfPages,
      pdfLink,
      abstract,
      editor,
      editionYear,
      imagePath,
    })
    // Création d'un nouveau livre avec les données récupérées
    return response.created(book)
  }

  async show({params, response}: HttpContext) {
    //return await Book.findByOrFail(params.id)
    const book = await Book.findOrFail(params.id)

    return response.ok(book)
  }

  async update({request, params, response}: HttpContext) {
    // Mettre à jour un livre
    const data = request.only([
      'title',
      'numberOfPages',
      'pdfLink',
      'abstract',
      'editor',
      'editionYear',
      'imagePath',
    ])
    // Vérification de l'existance du livre
    const book = await Book.findOrFail(params.id)
    // Mise à jour des données du livre
    book.merge(data)
    // Sauvegarde des modifications
    await book.save()
    // Retour le json de l'élève mis à jour
    return response.ok(book)
  }

  async destroy({params, response}: HttpContext) {
    // Vérification de l'existance du livre
    const book = await Book.findOrFail(params.id)
    // Supression du livre
    return await book.delete()

    return response.noContent()
  }
}