// import type { HttpContext } from '@adonisjs/core/http'

import Ingredientess from "#models/ingredientess";

export default class IngredientessesController {
  async index(){
    return await Ingredientess.all()
  }
}
