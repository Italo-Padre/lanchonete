import FormaPagamento from '#models/forma_pagamento'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await FormaPagamento.createMany([
      { "nome": "Dinheiro" },
      { "nome": "Cartão de Crédito" },
      { "nome": "Cartão de Débito" },
      { "nome": "Transferência Bancária" },
      { "nome": "Pix" }
    ])
  }
}
