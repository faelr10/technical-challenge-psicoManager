# Projeto de Chat em Tempo Real

## Descrição

O projeto consiste em um sistema de chat em tempo real desenvolvido para demonstrar habilidades em desenvolvimento web. A aplicação utiliza uma arquitetura baseada em microserviços, onde o servidor é desenvolvido em Node.js com o framework NestJS. O banco de dados utilizado é o MongoDB. O frontend é desenvolvido em PHP com o framework Laravel. A comunicação entre o frontend e o backend é realizada em tempo real utilizando o Socket.IO para o chat.

## Instruções de Configuração

### Servidor

1. Instale e inicie o MongoDB.
2. Tenha o Node.js instalado.
3. Clone o repositório.
4. Instale as dependências do projeto:

```bash
npm install
```

5. Configure as variáveis de ambiente no arquivo `.env` com o `DATABASE_URL` e `PORT`.
6. Inicie o servidor de desenvolvimento:

```bash
npm run start:dev
```

### Frontend

1. Clone o repositório em Laravel.
2. Configure a variável de ambiente `SOCKET_URL` no arquivo `.env` com o endereço do servidor Socket.IO.
3. Inicie o servidor Laravel com o comando:

```bash
php artisan serve --port=3000
```

Isso fará com que o projeto rode na porta 3000.

## Instruções de Uso

Acesse a interface de usuário localmente através da URL [http://localhost:3000/login](http://localhost:3000/login) após iniciar o servidor. Você será redirecionado para uma página onde irá preencher seu nome e, em seguida, será redirecionado para a sala de chat onde poderá interagir em tempo real.

## Principais Componentes

### Servidor

- Node.js
- NestJS
- Mongoose como ORM
- Socket.IO para comunicação em tempo real

### Frontend

- PHP
- Framework Laravel
- Socket.IO para comunicação em tempo real

### Banco de Dados

- MongoDB

## Decisões de Design

- Utilização do padrão Service e Repository para os módulos que recebem requisições e interagem com o banco de dados.
- Escolha do framework NestJS devido às ferramentas disponibilizadas, facilitando configurações referentes ao Socket.IO, além de fornecer uma estrutura pré-definida.
- A arquitetura de código foi pensada visando o crescimento da aplicação, como a criação de usuários, autenticação e criação de salas privadas ou públicas.
