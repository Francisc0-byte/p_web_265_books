import type { HttpContext } from '@adonisjs/core/http'

import Book from "#models/book"
import { request } from 'http'

export default class BooksController {

  async index({}: HttpContext) {
    return await Book.query().orderBy('title').orderBy('editor')
  }

  async store({request}: HttpContext) {
    // Récupération des données envoyées par le client
    // On utilise `request.only` pour ne récupérer que les champs nécessaires
    const book = request.only(['title', 'Editor', 'editionYear'])
    // Création d'un nouveau livre avec les données récupérées
    return await Book.create(book)
  }

  async show({}: HttpContext) {
    //return await Book.findByOrFail(params.id)
  }

  async update({request, params}: HttpContext) {
    // Mettre à jour un livre
    const data = request.only(['title', 'Editor', 'editionYear'])
    // Vérification de l'existance du livre
    const book = await Book.findByOrFail(params.id)
    // Mise à jour des données du livre
    book.merge(data)
    // Sauvegarde des modifications
    await book.save()
    // Retour le json de l'élève mis à jour
    return book
  }

  async destroy({params}: HttpContext) {
    // Vérification de l'existance du livre
    const book = await Book.findByOrFail(params.id)
    // Supression du livre
    return await book.delete()
  }
}