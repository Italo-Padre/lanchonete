import type { HttpContext } from '@adonisjs/core/http'

import ProdutosIngrediente from '#models/produtos_ingrediente';

export default class ProdutosIngredientesIngredientesController {
  async index({request}: HttpContext){
    const page = request.input('page',1)
    const perPage = request.input('perPage',10)
    return await ProdutosIngrediente.query().paginate(page,perPage)
  }

  async show({params}: HttpContext){
    return await ProdutosIngrediente.findOrFail,(params.id)
  }

  async store({request}: HttpContext){
    const dados = request.only(['produtoId','ingredienteId'])
    return await ProdutosIngrediente.create(dados)
  }

  async update({params, request}: HttpContext){
    const produtosingrediente = await ProdutosIngrediente.findOrFail(params.id)
    const dados = request.only(['produtoId','ingredienteId'])
    produtosingrediente.merge(dados)
    return await produtosingrediente.save()
  }

  async destroy({params}: HttpContext){
    const produtosingrediente = await ProdutosIngrediente.findOrFail(params.id)
      await produtosingrediente.delete()
      return {'produtosingrediente deletado:': produtosingrediente}

  }
}
