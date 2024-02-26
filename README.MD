Projeto de Chat em Tempo Real
Descrição
O projeto consiste em um sistema de chat em tempo real desenvolvido para demonstrar habilidades em desenvolvimento web. A aplicação utiliza uma arquitetura baseada em microserviços, onde o servidor é desenvolvido em Node.js com o framework NestJS. O banco de dados utilizado é o MongoDB. O frontend é desenvolvido em PHP com o framework Laravel. A comunicação entre o frontend e o backend é realizada em tempo real utilizando o Socket.IO para o chat.

Instruções de Configuração
Servidor:
Instale e inicie o MongoDB.
Tenha o Node.js instalado (versão x ou superior).
Clone o repositório.
Instale as dependências do projeto:
sh
Copy code
npm install
Configure as variáveis de ambiente no arquivo .env com o DATABASE_URL e PORT.
Inicie o servidor de desenvolvimento:
sh
Copy code
npm run start:dev
Frontend:
Clone o repositório em Laravel.
Configure a variável de ambiente SOCKET_URL no arquivo .env com o endereço do servidor Socket.IO.
Inicie o servidor Laravel com o comando:
sh
Copy code
php artisan serve --port=3000
Isso fará com que o projeto rode na porta 3000.
Instruções de Uso
Acesse a interface de usuário localmente através da URL <http://localhost:3000/login> após iniciar o servidor. Você será redirecionado para uma página onde irá preencher seu nome e, em seguida, será redirecionado para a sala de chat onde poderá interagir em tempo real.

Principais Componentes
Servidor:
Node.js
NestJS
Prisma.io como ORM
Socket.IO para comunicação em tempo real
Frontend:
PHP
Framework Laravel
AJAX ou Axios (a definir)
Banco de Dados:
MongoDB
Decisões de Design
Utilização do padrão Controller, Service e Repository para os módulos que recebem requisições HTTP e interagem com o banco de dados.
Escolha do framework NestJS devido às ferramentas disponibilizadas, facilitando configurações referentes ao Socket.IO, além de fornecer uma estrutura pré-definida.
A arquitetura de código foi pensada visando o crescimento da aplicação, como a criação de usuários, autenticação e criação de salas privadas ou públicas.