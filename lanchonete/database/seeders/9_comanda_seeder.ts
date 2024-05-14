import Comanda from '#models/comanda'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Comanda.createMany([
      {
        "nome": "Comanda 1",
        "funcionarioId": 1,
        "clienteId": 1,
        "formaPagamentoId": 1
      },
      {
        "nome": "Comanda 2",
        "funcionarioId": 2,
        "clienteId": 2,
        "formaPagamentoId": 2
      },
      {
        "nome": "Comanda 3",
        "funcionarioId": 3,
        "clienteId": 3,
        "formaPagamentoId": 3
      },
      {
        "nome": "Comanda 4",
        "funcionarioId": 4,
        "clienteId": 4,
        "formaPagamentoId": 4
      },
      {
        "nome": "Comanda 5",
        "funcionarioId": 5,
        "clienteId": 5,
        "formaPagamentoId": 5
      },
      {
        "nome": "Comanda 6",
        "funcionarioId": 1,
        "clienteId": 3,
        "formaPagamentoId": 1
      },
      {
        "nome": "Comanda 7",
        "funcionarioId": 2,
        "clienteId": 2,
        "formaPagamentoId": 2
      },
      {
        "nome": "Comanda 8",
        "funcionarioId": 4,
        "clienteId": 5,
        "formaPagamentoId": 3
      },
      {
        "nome": "Comanda 9",
        "funcionarioId": 5,
        "clienteId": 4,
        "formaPagamentoId": 4
      },
      {
        "nome": "Comanda 10",
        "funcionarioId": 1,
        "clienteId": 2,
        "formaPagamentoId": 5
      },
      {
        "nome": "Comanda 11",
        "funcionarioId": 1,
        "clienteId": 1,
        "formaPagamentoId": 1
      },
      {
        "nome": "Comanda 12",
        "funcionarioId": 2,
        "clienteId": 2,
        "formaPagamentoId": 2
      },
      {
        "nome": "Comanda 13",
        "funcionarioId": 3,
        "clienteId": 3,
        "formaPagamentoId": 3
      },
      {
        "nome": "Comanda 14",
        "funcionarioId": 4,
        "clienteId": 4,
        "formaPagamentoId": 4
      },
      {
        "nome": "Comanda 15",
        "funcionarioId": 1,
        "clienteId": 5,
        "formaPagamentoId": 5
      },
      {
        "nome": "Comanda 16",
        "funcionarioId": 3,
        "clienteId": 5,
        "formaPagamentoId": 1
      },
      {
        "nome": "Comanda 17",
        "funcionarioId": 4,
        "clienteId": 5,
        "formaPagamentoId": 2
      }
    ])
  }
}
