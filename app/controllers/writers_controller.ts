import Writer from '#models/writer'
import { writerValidator } from '#validators/writer'
import type { HttpContext } from '@adonisjs/core/http'

export default class WritersController {
  /**
   * Affiche les Writers
   */
  async index({ response }: HttpContext) {
    const writers = await Writer.query().orderBy('name').orderBy('firstname')
    console.log(writers.length)
    return response.ok(writers)
  }

  /**
   * Gere la creation de l'écrivain
   */
  async store({ request, response }: HttpContext) {
    //Recupération des données envoyé par le client
    const { lastname, firstname } = await request.validateUsing(writerValidator)

    //Creation du writer avec les données valides
    const writer = await Writer.create({ lastname, firstname })

    return response.created(writer)
  }

  /**
   * Show individual record
   */
  async show({ response, params }: HttpContext) {
    //Cherche un Writer spécifique par son ID
    const writer = await Writer.findOrFail(params.id)

    return response.ok(writer)
  }

  async update({ params, request, response }: HttpContext) {
    //Récuperation des données
    const data = request.only(['lastname', 'firstname'])
    //Vérification de l'existance du Writer
    const writer = await Writer.findOrFail(params.id)
    //Mise à our des données
    writer.merge(data)
    //sauvegarde des modifications
    await writer.save()

    return response.ok(writer)
  }

  async destroy({ params }: HttpContext) {
    //vérification de l'existance
    const writer = await Writer.findOrFail(params.id)

    return await writer.delete()
  }
}
