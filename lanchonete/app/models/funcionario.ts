import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Comanda from './comanda.js'
import Cargo from './cargo.js'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare cpf: string

  @column()
  declare endereco: string

  @column()
  declare sexo: string

  @column()
  declare telefone: string

  @column()
  declare cargoId: number


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=>Comanda)
  declare comanda: HasMany<typeof Comanda>

  @belongsTo(()=>Cargo,{
    foreignKey:'cargoId'
  })
  declare cargo: BelongsTo<typeof Cargo>

}
