/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CategoriesController from '#controllers/categories_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return 'Api is working'
})

router.resource('category',CategoriesController).apiOnly()

