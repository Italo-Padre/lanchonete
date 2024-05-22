import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Funcionario from './funcionario.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Cliente from './cliente.js'
import FormaPagamento from './forma_pagamento.js'
import ProdutosComanda from './produtos_comanda.js'

export default class Comanda extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare mesa: string

  @column()
  declare funcionarioId: number

  @column()
  declare clienteId: number

  @column()
  declare formaPagamentoId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=>ProdutosComanda)
  declare produto_comanda: HasMany<typeof ProdutosComanda>

  @belongsTo(()=>Funcionario,{
    foreignKey:'funcionarioId'
  })
  declare funcionario: BelongsTo<typeof Funcionario>

  @belongsTo(()=>Cliente,{
    foreignKey:'clienteId'
  })
  declare cliente: BelongsTo<typeof Cliente>

  @belongsTo(()=>FormaPagamento,{
    foreignKey:'formaPagamentoId'
  })
  declare forma_pagamento: BelongsTo<typeof FormaPagamento>
}
