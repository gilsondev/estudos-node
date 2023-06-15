# Dependencies

```
pnpm add @prisma/client fastify fastify-zod zod zod-to-json-schema fastify-jwt
```

## Dev Dependencies

```
pnpm add ts-node-dev typescript @types/node -D
```

# Prisma

Initialize prisma:
```
pnpm dlx prisma init --datasource-provider postgresql
```

Migrate schema:
```
pnpm dlx prisma migrate dev --name Initial
```
