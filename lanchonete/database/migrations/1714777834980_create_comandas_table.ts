import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comandas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 45)
      table.integer('funcionario_id').unsigned().references('funcionarios.id')
      table.integer('cliente_id').unsigned().references('clientes.id')
      table.integer('forma_pagamento_id').unsigned().references('forma_pagamentos.id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
