
# Projeto de Teste Técnico Radar Saúde

Este projeto é uma aplicação full-stack desenvolvida como parte de um teste técnico para a empresa Radar Saúde. A aplicação inclui um frontend desenvolvido em TypeScript, um backend em Node.js com JavaScript e um banco de dados PostgreSQL. A seguir, estão os detalhes do projeto.

## Funcionalidades

- CRUD Completo: É possível criar, ler, atualizar e deletar usuários.
- Dados dos Usuários: Cada usuário possui os seguintes campos:
    - Nome
    - E-mail
    - Sexo
    - Data de Nascimento
    - Telefone
- UUID: Utilizado como identificador único para cada usuário.
- Paginação: Os dados são buscados com paginação, exibindo 10 usuários por página. A cada nova página, mais 10 usuários são carregados.
- Filtro: É possível filtrar usuários simultaneamente por nome e e-mail.

## Deploy

- Frontend: Hospedado na Vercel.
- API e Banco de Dados: Hospedados no Render.

## Tecnologias Utilizadas
#### Frontend

- Linguagem: TypeScript
- Bibliotecas: React e Ant Design
 
#### Backend

- Linguagem: JavaScript
- Framework: Express
- ORM: Sequelize
- Banco de Dados: PostgreSQL

# Clone o repositório

``` 
git clone <URL_DO_REPOSITORIO>
```

#### Configure as variáveis de ambiente no arquivo `.env`

``` 
Exemplo de .env:
# DB_HOST=<seu_host>
# DB_PORT=5432
# DB_NAME=<nome_do_banco>
# DB_USER=<seu_usuario>
# DB_PASSWORD=<sua_senha>
```

#### Script para instalação do Backend

``` 
cd backend
```

``` 
npm install
```

#### Script para criar o banco postgres 

``` 
npx sequelize-cli db:create
```

#### Script para alimentar o banco com seeders e rodar API

``` 
npm restart
```

``` 
npm start
```

#### Script para instalação e execução do Frontend 

```
cd frontend
```

``` 
npm install
```

```
npm start
```
