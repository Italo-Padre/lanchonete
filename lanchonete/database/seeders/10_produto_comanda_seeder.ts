import ProdutosComanda from '#models/produtos_comanda'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await ProdutosComanda.createMany([
      {
        "produtoId": 1,
        "comandaId": 1,
        "quantidade": 2.5
      },
      {
        "produtoId": 2,
        "comandaId": 2,
        "quantidade": 1.5
      },
      {
        "produtoId": 3,
        "comandaId": 3,
        "quantidade": 3.0
      },
      {
        "produtoId": 4,
        "comandaId": 4,
        "quantidade": 2.0
      },
      {
        "produtoId": 5,
        "comandaId": 5,
        "quantidade": 1.0
      },
      {
        "produtoId": 6,
        "comandaId": 6,
        "quantidade": 4.0
      },
      {
        "produtoId": 7,
        "comandaId": 7,
        "quantidade": 2.5
      },
      {
        "produtoId": 8,
        "comandaId": 8,
        "quantidade": 3.5
      },
      {
        "produtoId": 9,
        "comandaId": 9,
        "quantidade": 1.5
      },
      {
        "produtoId": 10,
        "comandaId": 10,
        "quantidade": 2.0
      },
      {
        "produtoId": 11,
        "comandaId": 11,
        "quantidade": 2.5
      },
      {
        "produtoId": 12,
        "comandaId": 12,
        "quantidade": 1.0
      },
      {
        "produtoId": 13,
        "comandaId": 13,
        "quantidade": 3.0
      },
      {
        "produtoId": 14,
        "comandaId": 14,
        "quantidade": 2.0
      },
      {
        "produtoId": 15,
        "comandaId": 15,
        "quantidade": 1.5
      },
      {
        "produtoId": 16,
        "comandaId": 16,
        "quantidade": 2.5
      },
      {
        "produtoId": 17,
        "comandaId": 17,
        "quantidade": 3.0
      }
    ])
  }
}
