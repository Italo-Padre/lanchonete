import Funcionario from '#models/funcionario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Funcionario.createMany([
      {
        "nome": "João Silva",
        "cpf": "123.456.789-00",
        "endereco": "Rua A, 123",
        "sexo": "M",
        "telefone": "(12) 3456-7890",
        "cargoId": 1
      },
      {
        "nome": "Maria Santos",
        "cpf": "987.654.321-00",
        "endereco": "Av. B, 456",
        "sexo": "F",
        "telefone": "(21) 9876-5432",
        "cargoId": 2
      },
      {
        "nome": "José Oliveira",
        "cpf": "456.789.123-00",
        "endereco": "Rua C, 789",
        "sexo": "M",
        "telefone": "(34) 5678-9123",
        "cargoId": 3
      },
      {
        "nome": "Ana Pereira",
        "cpf": "654.321.987-00",
        "endereco": "Av. D, 1011",
        "sexo": "F",
        "telefone": "(45) 6789-1234",
        "cargoId": 2
      },
      {
        "nome": "Carlos Ferreira",
        "cpf": "321.987.654-00",
        "endereco": "Rua E, 1213",
        "sexo": "M",
        "telefone": "(56) 7891-2345",
        "cargoId": 4
      }
    ])
  }
}
