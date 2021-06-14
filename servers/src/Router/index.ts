import { FastifyPluginCallback } from "fastify";
import userRoute from "./api/user";
import aptsRoute from "./api/apts";

const apiRoute: FastifyPluginCallback = (fastify, opts, done) => {
    fastify.register(userRoute, {prefix: '/user'})
    fastify.register(aptsRoute, {prefix: '/apt'})
    done()
}
export default apiRoute