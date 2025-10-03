/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import WritersController from '#controllers/writers_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'Api is Working',
  }
})

router.resource('writers', WritersController).apiOnly()
