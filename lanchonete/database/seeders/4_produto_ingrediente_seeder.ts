import ProdutosIngrediente from '#models/produtos_ingrediente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await ProdutosIngrediente.createMany([
      {produtoId: 5, ingredienteId:1 },
      {produtoId: 5, ingredienteId:2 },
      {produtoId: 5, ingredienteId:3 },
    ])
  }
}
