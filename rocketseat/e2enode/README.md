# E2E Node

Projeto criado com base na live [Decode](https://www.youtube.com/watch?v=w_el04y0cHo) sobre testes automatizados em Node.js.

## Requisitos

- [asdf](https://asdf-vm.com/guide/getting-started.html)

## Problemas

Durante a implementação desse projeto, talvez pelo espaço de tempo passou por algums problemas para funcionar (alguns resolvidos e outros não).

#### 1. Node Environment

Foi preciso fazer uma pequena mudança para fazer funcionar, levando agora em consideração um segundo argumento no construtor e além disso
uma outra tipagem. Exemplo:

```typescript
import type {
  EnvironmentContext,
  JestEnvironmentConfig,
} from "@jest/environment";

// outras importações (...)

export default class PrismaTestEnvironment extends NodeEnvironment {
  private schema: string;
  private connectionString: string;

  constructor(config: JestEnvironmentConfig, context: EnvironmentContext) {
    super(config, context);

    // (...)
  }
  // (...)
}
```

#### 2. Execução dos testes E2E

Na execução desses testes, acabou passando:

```
pnpm run test:e2e

> e2enode@1.0.0 test:e2e /some-dir/estudos-node/rocketseat/e2enode
> jest --config jest-e2e.config.ts

 PASS  src/app.e2e-spec.ts
  ✓ [e2e] Create Lesson (26 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.899 s, estimated 1 s
Ran all test suites.
```

Mas no processo de `teardown` por algum motivo, o Prisma gerou o seguinte erro:

```
The table `test_a9e128b0-4933-44d0-8a9d-aa8334eadb7c.lessons` does not exist in the current database.
    at An.handleRequestError (/some-dir/estudos-node/rocketseat/e2enode/node_modules/.pnpm/@prisma+client@4.15.0_prisma@4.15.0/node_modules/@prisma/client/runtime/library.js:174:6929)
    at An.handleAndLogRequestError (/some-dir/estudos-node/rocketseat/e2enode/node_modules/.pnpm/@prisma+client@4.15.0_prisma@4.15.0/node_modules/@prisma/client/runtime/library.js:174:6358)
    at An.request (/some-dir/estudos-node/rocketseat/e2enode/node_modules/.pnpm/@prisma+client@4.15.0_prisma@4.15.0/node_modules/@prisma/client/runtime/library.js:174:6237)
    at async PrismaLessonsRepository.create (/some-dir/estudos-node/rocketseat/e2enode/src/repositories/prisma/PrismaLessonsRepository.ts:14:9)
    at async CreateLesson.execute (/some-dir/estudos-node/rocketseat/e2enode/src/services/CreateLesson.ts:20:9) {
  code: 'P2021',
  clientVersion: '4.15.0',
  meta: { table: 'test_a9e128b0-4933-44d0-8a9d-aa8334eadb7c.lessons' }
```

Talvez precise fechar a transação que em algum momento ainda ficou aberto, mas no momento não consegui resolver.
