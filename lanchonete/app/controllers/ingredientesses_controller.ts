import type { HttpContext } from '@adonisjs/core/http'

import Ingredientess from "#models/ingredientess";

export default class IngredientessesController {
  async index({request}: HttpContext){
    const page = request.input('page',1)
    const perPage = request.input('perPage',10)
    return await Ingredientess.query().paginate(page,perPage)
  }

  async show({params}: HttpContext){
    return await Ingredientess.findOrFail,(params.id)
  }

  async store({request}: HttpContext){
    const dados = request.only(['nome','descricao'])
    return await Ingredientess.create(dados)
  }

  async update({params, request}: HttpContext){
    const ingredientess = await Ingredientess.findOrFail(params.id)
    const dados = request.only(['nome','descricao'])
    ingredientess.merge(dados)
    return await ingredientess.save()
  }

  async destroy({params}: HttpContext){
    const ingredientess = await Ingredientess.findOrFail(params.id)
      await ingredientess.delete()
      return {'ingredientess deletado:': ingredientess}

  }
}
