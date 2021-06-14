import { FastifyPluginAsync } from "fastify";

const userRoute: FastifyPluginAsync = async (fastify, opts) => {
    fastify.get('/', async (req, reply) => {
        reply.send('hello')
    })
}

export default userRoute