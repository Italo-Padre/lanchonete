import ProdutosComanda from '#models/produtos_comanda'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProdutosComandasController {
  async index({request}: HttpContext){
    const page = request.input('page',1)
    const perPage = request.input('perPage',10)
    return await ProdutosComanda.query().paginate(page,perPage)
  }

  async show({params}: HttpContext){
    return await ProdutosComanda.findOrFail,(params.id)
  }

  async store({request}: HttpContext){
    const dados = request.only(['produtoId','comandaId','quantidade'])
    return await ProdutosComanda.create(dados)
  }

  async update({params, request}: HttpContext){
    const produtoscomanda = await ProdutosComanda.findOrFail(params.id)
    const dados = request.only(['produtoId','comandaId','quantidade'])
    produtoscomanda.merge(dados)
    return await produtoscomanda.save()
  }

  async destroy({params}: HttpContext){
    const produtoscomanda = await ProdutosComanda.findOrFail(params.id)
      await produtoscomanda.delete()
      return {'produtoscomanda deletado:': produtoscomanda}

  }
}
