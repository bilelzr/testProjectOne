import { FastifyReply, FastifyRequest } from "fastify";

const healthController = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
    const {PORT, HOST} = request.server.getEnv();

  return reply.status(200).send({
    message: "up and running",
    PORT,
    HOST
  });
};

export { healthController };
