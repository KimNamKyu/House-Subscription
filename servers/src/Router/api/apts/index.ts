import { FastifyPluginAsync } from "fastify";

const aptsRoute: FastifyPluginAsync = async (fastify, opts) => {
    fastify.get('/', async (req, reply) => {
        reply.send('apts')
    })
}

export default aptsRoute