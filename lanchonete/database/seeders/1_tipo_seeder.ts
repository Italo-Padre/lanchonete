import Tipo from '#models/tipo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
     await Tipo.createMany([
      {nome:'Bebidas'},
      {nome:'Hamburguer'},
      {nome:'Sobremesas'},
      {nome:'Hot dog'},
      {nome:'Porções'}
    ])
  }
}
