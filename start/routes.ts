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
 router.get('', [StudentsController, 'index'])
 router.get(':id', [StudentsController, 'show'])
 router.post('', [StudentsController, 'store'])
 router.put(':id', [StudentsController, 'update'])
 router.patch(':id', [StudentsController, 'update'])
 router.delete(':id', [StudentsController, 'destroy'])
}).prefix('students')
*/