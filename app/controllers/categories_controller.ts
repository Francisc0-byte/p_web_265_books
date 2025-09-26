import type { HttpContext } from '@adonisjs/core/http'
import Category from '#models/category'
export default class CategoriesController {
  /**
   * Display a list of resource
   */
  async index({response}: HttpContext) {
    const category = await Category.query().orderBy('id')
    return response.ok(category)
  }
  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}