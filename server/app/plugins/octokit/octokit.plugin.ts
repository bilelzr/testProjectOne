import { Octokit } from "octokit"
import { env } from "../envalid/envalid.plugin";
import { FastifyPluginCallback } from "fastify";
import fastifyPlugin from "fastify-plugin";

const octokit = new Octokit({ 
  auth: env.TOKEN
});

type IOctokit = typeof octokit;

declare module "fastify" {
  interface FastifyInstance {
    octokit: IOctokit;
  }
}

const plugin: FastifyPluginCallback = async (app) => {
  if (typeof app.getEnv !== "undefined") return;
  app.decorate("octokit", octokit);
};

export default fastifyPlugin(plugin);