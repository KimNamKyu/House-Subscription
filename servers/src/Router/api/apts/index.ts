import { FastifyPluginAsync } from "fastify";
import exData from "../../../exData";

const aptsRoute: FastifyPluginAsync = async (fastify, opts) => {
    fastify.get('/', async (req, reply) => {
        const data = exData.aptInfo;
        if(!data){
            reply.send({resultMsg: 'error'})
        }
        reply.status(200).send({resultCode: '200', resultData: data})
    })
}

export default aptsRoute