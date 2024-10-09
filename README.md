# Gerador de Corridas

## Descrição

Este projeto é uma API para gerenciamento de corridas, implementada com **Node.js**, **Express**, **Prisma ORM** e **SQLite**, e utilizando **Docker** para facilitar o desenvolvimento e o deploy. A aplicação permite criar e cancelar corridas para usuários (passageiros e motoristas).

## Decisões Técnicas e Justificativas

- **Node.js com Express**: O Node.js foi escolhido devido à sua eficiência em lidar com operações assíncronas, além de ser amplamente utilizado para APIs RESTful. O Express, um framework minimalista, facilita a criação de rotas e middleware, garantindo simplicidade e flexibilidade no desenvolvimento da API.
- **Prisma ORM**: O Prisma foi selecionado por sua abordagem intuitiva e tipada para interagir com o banco de dados, oferecendo autocompletar e validações durante o desenvolvimento. Além disso, permite um fácil uso de migrações e facilita a integração com o SQLite.

- **SQLite**: Escolhido como banco de dados devido à sua leveza e fácil configuração para um ambiente de desenvolvimento local. Além disso, é adequado para pequenas aplicações e testes rápidos, sem a necessidade de um servidor de banco de dados mais robusto.
- **Docker**: O Docker foi utilizado para garantir que o ambiente de desenvolvimento seja consistente em diferentes sistemas operacionais, facilitando o processo de build e deploy da aplicação.

## Como Rodar a Aplicação

### Requisitos

- **Node.js** v16 ou superior
- **Docker** (opcional, caso use a versão conteinerizada)

### Passo a Passo

#### Rodar Localmente

1. Instale as dependências:

   ```bash
   npm install

   ```

2. Execute a aplicação em modo de desenvolvimento:

   ```bash
   npm run dev

   ```

3. Ou use Docker:

   ```bash
   docker-compose up --build

   ```

4. Rodar testes:

   ```bash
   npm teste

   ```
