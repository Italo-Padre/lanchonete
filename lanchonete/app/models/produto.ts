import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import Tipo from './tipo.js'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Ingredientess from './ingredientess.js'
import ProdutosComanda from './produtos_comanda.js'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare preco: number

  @column()
  declare tamanho: string

  @column()
  declare tipoId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Tipo)
  declare tipo: BelongsTo<typeof Tipo>

  @hasMany(()=>ProdutosComanda)
  declare produto_comanda: HasMany<typeof ProdutosComanda>

  @manyToMany(()=>Ingredientess,{
    pivotTable:'produtos_ingredientes'
  })
  declare ingredientes: ManyToMany<typeof Ingredientess>
}
