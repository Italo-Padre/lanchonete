import Ingredientess from '#models/ingredientess'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Ingredientess.createMany([
      {nome:'Pão', descricao:'Para hamburguer'},
      {nome:'Maionese', descricao:'maionese especial'},
      {nome:'Queijo', descricao:'mussarela fatiado'},
    ])
  }
}
