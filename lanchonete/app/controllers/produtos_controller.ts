 import type { HttpContext } from '@adonisjs/core/http'

import Produto from "#models/produto";

export default class ProdutosController {
  async index({request}: HttpContext){
    const page = request.input('page',1)
    const perPage = request.input('perPage',10)
    return await Produto.query().preload('tipo').paginate(page,perPage)
  }

  async show({params}: HttpContext){
    return await Produto.query().where('id', params.id)
    .preload('tipo')
//    .preload('ingredientes')
    .firstOrFail()
  }

  async store({request}: HttpContext){
    const dados = request.only(['nome','preco','tamanho','tipoId'])
    return await Produto.create(dados)
  }

  async update({params, request}: HttpContext){
    const produto = await Produto.findOrFail(params.id)
    const dados = request.only(['nome','preco','tamanho','tipoId'])
    produto.merge(dados)
    return await produto.save()
  }

  async destroy({params}: HttpContext){
    const produto = await Produto.findOrFail(params.id)
      await produto.delete()
      return {'produto deletado:': produto}

  }

}
