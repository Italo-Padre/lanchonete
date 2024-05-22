import Comanda from '#models/comanda'
import type { HttpContext } from '@adonisjs/core/http'

export default class ComandasController {
  async index({request}: HttpContext){
    const page = request.input('page',1)
    const perPage = request.input('perPage',10)
    return await Comanda.query().paginate(page,perPage)
  }

  async show({params}: HttpContext){
    return await Comanda.query().where('id', params.id)
                                .preload('cliente')
                                .preload('funcionario')
                                .preload('forma_pagamento')
                                .firstOrFail()
  }

  async store({request}: HttpContext){
    const dados = request.only([ 'nome','funcionarioId','clienteId','formaPagamentoId'])
    return await Comanda.create(dados)
  }

  async update({params, request}: HttpContext){
    const comanda = await Comanda.findOrFail(params.id)
    const dados = request.only(['nome','funcionarioId','clienteId','formaPagamentoId'])
    comanda.merge(dados)
    return await comanda.save()
  }

  async destroy({params}: HttpContext){
    const comanda = await Comanda.findOrFail(params.id)
      await comanda.delete()
      return {'comanda deletado:': comanda}

  }
}
