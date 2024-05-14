import Cliente from '#models/cliente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Cliente.createMany([
      {"nome": "João Silva","cpf": "123.456.789-00","telefone": "(12) 3456-7890","email": "joao.silva@example.com"},
      {"nome": "Maria Santos","cpf": "987.654.321-00","telefone": "(21) 9876-5432","email": "maria.santos@example.com"},
      {"nome": "José Oliveira","cpf": "456.789.123-00","telefone": "(34) 5678-9123","email": "jose.oliveira@example.com"},
      {"nome": "Ana Pereira","cpf": "654.321.987-00","telefone": "(45) 6789-1234","email": "ana.pereira@example.com"},
      {"nome": "Carlos Ferreira","cpf": "321.987.654-00","telefone": "(56) 7891-2345","email": "carlos.ferreira@example.com"}
    ])
  }
}
