/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import IngredientessesController from '#controllers/ingredientesses_controller'
import ProdutosController from '#controllers/produtos_controller'
import ProdutosIngredientesController from '#controllers/produtos_ingredientes_controller'
import TiposController from '#controllers/tipos_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
router.resource('/produtos', ProdutosController).apiOnly()
router.resource('/tipos', TiposController).apiOnly()
router.resource('/ingredientes', IngredientessesController).apiOnly()
router.resource('/produtoIngrediente', ProdutosIngredientesController).apiOnly()


