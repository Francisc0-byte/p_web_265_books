/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import BooksController from '#controllers/books_controller'
import CategoriesController from '#controllers/categories_controller'
import UsersController from '#controllers/users_controller'
import WritersController from '#controllers/writers_controller'

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'Api is Working',
  }
})
  router.resource('/api/books',BooksController).apiOnly()
  router.resource('/api/writers', WritersController).apiOnly()
  router.resource('/api/category', CategoriesController).apiOnly()
  router.resource('/api/users', UsersController).apiOnly()

router.group(()=>{
  router.resource('writers', WritersController).apiOnly()
  router.resource('category', CategoriesController).apiOnly()
  router.resource('users', UsersController).apiOnly()

})
.prefix('books/:books_id')