import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Produto from './produto.js'
import Comanda from './comanda.js'

export default class ProdutosComanda extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare produtoId: number

  @column()
  declare comandaId: number

  @column()
  declare quantidade: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Produto,{
    foreignKey:'produtoId'
  })
  declare produto: BelongsTo<typeof Produto>

  @belongsTo(()=>Comanda,{
    foreignKey:'comandaId'
  })
  declare comanda: BelongsTo<typeof Comanda>
}
