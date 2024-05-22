/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CargosController from '#controllers/cargos_controller'
import ClientesController from '#controllers/clientes_controller'
import ComandasController from '#controllers/comandas_controller'
import FuncionariosController from '#controllers/funcionarios_controller'
import IngredientessesController from '#controllers/ingredientesses_controller'
import ProdutosController from '#controllers/produtos_controller'
import ProdutosIngredientesController from '#controllers/produtos_ingredientes_controller'
import TiposController from '#controllers/tipos_controller'
import ProdutosComanda from '#models/produtos_comanda'
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
router.resource('/produtoComanda', ProdutosComanda).apiOnly()
router.resource('/comandas', ComandasController).apiOnly()
router.resource('/funcionario', FuncionariosController).apiOnly()
router.resource('/cargo', CargosController).apiOnly()
router.resource('/cliente', ClientesController).apiOnly()


