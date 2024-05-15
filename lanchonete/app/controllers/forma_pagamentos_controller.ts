import FormaPagamento from '#models/forma_pagamento'
import type { HttpContext } from '@adonisjs/core/http'

export default class FormaPagamentosController {
  async index({request}: HttpContext){
    const page = request.input('page',1)
    const perPage = request.input('perPage',10)
    return await FormaPagamento.query().paginate(page,perPage)
  }

  async show({params}: HttpContext){
    return await FormaPagamento.findOrFail,(params.id)
  }

  async store({request}: HttpContext){
    const dados = request.only([ 'nome'])
    return await FormaPagamento.create(dados)
  }

  async update({params, request}: HttpContext){
    const formapagamento = await FormaPagamento.findOrFail(params.id)
    const dados = request.only(['nome'])
    formapagamento.merge(dados)
    return await formapagamento.save()
  }

  async destroy({params}: HttpContext){
    const formapagamento = await FormaPagamento.findOrFail(params.id)
      await formapagamento.delete()
      return {'formapagamento deletado:': formapagamento}

  }
}
