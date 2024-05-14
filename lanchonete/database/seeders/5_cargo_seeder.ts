import Cargo from '#models/cargo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Cargo.createMany([

      { "nome": "Gerente" },
      { "nome": "Chef" },
      { "nome": "Cozinheiro" },
      { "nome": "Auxiliar de Cozinha" },
      { "nome": "Garçom" }
    ])
  }
}
