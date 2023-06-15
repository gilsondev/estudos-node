import fastify from "fastify";
import Fastify from "fastify";

const server = Fastify({
  logger: true,
});

server.get("/healthcheck", async (request, reply) => {
  return { status: "ok" };
});

const main = async () => {
  try {
    await server.listen({ port: 3000, host: "0.0.0.0" });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

main();
