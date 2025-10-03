/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import BooksController from '#controllers/books_controller'
import router from '@adonisjs/core/services/router'

router.get('test', async () => {
  return 'API is working!'
})

router.resource('book', BooksController).apiOnly()

/* est équivalent à :
router.group(() => {
 router.get('', [BooksController, 'index'])
 router.get(':id', [BooksController, 'show'])
 router.post('', [BooksController, 'store'])
 router.put(':id', [BooksController, 'update'])
 router.patch(':id', [BooksController, 'update'])
 router.delete(':id', [BooksController, 'destroy'])
}).prefix('books')
*/