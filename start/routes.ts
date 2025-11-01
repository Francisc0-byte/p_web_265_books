/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthController from '#controllers/auth_controller'
import BooksController from '#controllers/books_controller'
import CategoriesController from '#controllers/categories_controller'
import UsersController from '#controllers/users_controller'
import WritersController from '#controllers/writers_controller'

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.get('/', async () => {
  return {
    hello: 'Api is Working',
  }
})
router.resource('/api/books', BooksController).apiOnly()
router.resource('/api/writers', WritersController).apiOnly()
router.resource('/api/category', CategoriesController).apiOnly()
router.resource('/api/users', UsersController).apiOnly()

router
  .group(() => {
    router.resource('writers', WritersController).apiOnly()
    router.resource('category', CategoriesController).apiOnly()
    router.resource('users', UsersController).apiOnly()
  })
  .prefix('books/:books_id')
  .use(middleware.auth())


//Route Imbriqué permettant de trouver tous les livres par categories
router.get('category/:category_id/books', [BooksController, 'indexByCategory'])

// Routes pour l'authentification
router
 .group(() => { // Ajout Jess
 router.post('register', [AuthController, 'register'])
 router.post('login', [AuthController, 'login'])
 router.post('logout', [AuthController, 'logout']).use(middleware.auth())
 })
 .prefix('user')
