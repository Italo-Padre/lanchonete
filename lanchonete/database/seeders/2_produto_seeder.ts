import Produto from '#models/produto'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Produto.createMany([
      {nome:'Coca-Cola', preco:6.5, tamanho:'600ml', tipoId:1},
      {nome:'Coca-Cola 2L', preco:10, tamanho:'2L', tipoId:1},
      {nome:'Pepsi 2L', preco:10, tamanho:'2L', tipoId:1},
      {nome:'Fanta 2L', preco:10, tamanho:'2L', tipoId:1},
      {nome:'x-tudo', preco:15, tamanho:'250 gm', tipoId:2},

      {nome:'Pudim', preco:15, tamanho:'250 gm', tipoId:3},

      {nome:'PCachorro quente', preco:8, tamanho:'150 gm', tipoId:4},
      {nome:'batata frita', preco:25, tamanho:'G', tipoId:5},
      {nome:'Frango a passarinho', preco:35, tamanho:'G', tipoId:5},
    ])
  }
}
