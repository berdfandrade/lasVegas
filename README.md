# Slot Machine

Este é um projeto de uma máquina caça-níqueis desenvolvida em nível full-stack com as seguintes tecnologias:

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)


A aplicação é dividida em duas partes: a parte do cliente (front-end) e a parte do servidor (back-end).

## Parte do cliente

A parte do cliente foi desenvolvida utilizando o framework React. A interface da aplicação consiste em uma tela de jogo contendo uma área para exibição dos resultados, o saldo do jogador e um botão para girar a máquina. A interface foi estilizada utilizando CSS.

## Parte do servidor

A parte do servidor foi desenvolvida utilizando Node.js e Express. O servidor armazena informações do jogo, como a lista de jogadores e seus respectivos saldos. As informações são armazenadas em um banco de dados MongoDB.

O servidor utiliza o Socket.IO para enviar atualizações em tempo real para o cliente. Isso permite que os resultados do jogo sejam atualizados automaticamente na tela do jogador.

## Como executar o projeto

### Pré-requisitos

Antes de executar o projeto, certifique-se de ter as seguintes tecnologias instaladas em sua máquina:

- Node.js
- MongoDB

### Instalação

1. Clone o repositório em sua máquina local.
2. Execute o comando `npm install` dentro do diretório do projeto para instalar as dependências do servidor.
3. Execute o comando `npm run client-install` para instalar as dependências do cliente.
4. Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis de ambiente:

arduino

`MONGO_URI=<uri do MongoDB> PORT=<porta do servidor>`

5. Execute o comando `npm run dev` para iniciar o servidor e o cliente.

## Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir um pull request ou uma issue no repositório.
