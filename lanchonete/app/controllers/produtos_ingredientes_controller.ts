// import type { HttpContext } from '@adonisjs/core/http'

import ProdutosIngrediente from "#models/produtos_ingrediente";

export default class ProdutosIngredientesController {
  async index(){
    return await ProdutosIngrediente.all()
  }
}
