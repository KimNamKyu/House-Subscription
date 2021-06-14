import { FastifyPluginCallback } from "fastify";
import userRoute from "./api/user";

const apiRoute: FastifyPluginCallback = (fastify, opts, done) => {
    fastify.register(userRoute, {prefix: '/user'})
    done()
}
export default apiRoute