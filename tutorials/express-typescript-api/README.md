# Tutorial - API REST com Express, Typescript e Prisma

Projeto criado com base no tutorial [Build a Node.js & Express.js REST API using TypeScript](https://www.youtube.com/watch?v=PM58NEMJgMw),
que ensina como criar uma API RESTful usando Node.js, Express.js e TypeScript.

O tutorial aborda desde a configuração do ambiente de desenvolvimento até a implementação de rotas, middlewares e controladores para criar uma API totalmente funcional.


## Requisitos

- [asdf](https://asdf-vm.com/guide/getting-started.html)

As tecnologias usadas no projeto são:


### Desenvolvimento

- `@types/cors`: Definições de tipos para a biblioteca `cors`.
- `@types/dotenv`: Definições de tipos para a biblioteca `dotenv`.
- `@types/express`: Definições de tipos para o framework `express`.
- `@types/node`: Definições de tipos para o ambiente Node.js.
- `esbuild-register`: Registro de módulo para compilar arquivos TypeScript com o `esbuild`.
- `nodemon`: Utilitário que monitora mudanças no código e reinicia a aplicação automaticamente.
- `prisma`: CLI para gerenciar o ORM `@prisma/client`.
- `typescript`: Linguagem de programação que adiciona tipagem estática ao JavaScript.


### Produção

- `@prisma/client`: ORM para banco de dados SQL.
- `cors`: Middleware para permitir requisições de diferentes origens (CORS).
- `dotenv`: Biblioteca para carregar variáveis de ambiente de um arquivo `.env`.
- `express`: Framework web para Node.js.
- `express-validator`: Biblioteca para validação de dados de entrada em requisições HTTP.


## Melhorias/Evoluções

- [ ] Melhorar a documentação da API
- [ ] Implementar uma API de autenticação
- [ ] Implementar testes unitários
- [ ] Implementar testes de integração
