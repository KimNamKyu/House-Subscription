import fastify from 'fastify';
import 'dotenv/config'
import apiRoute from './Router';

const PORT = parseInt(process.env.PORT, 10);

export default class Server {
    app = fastify({ logger: true })
    constructor() {
        this.setup()
    }
    setup() {
        this.app.register(apiRoute, {prefix: '/api'})
    }

    start() {
        return this.app.listen(PORT)
    }

    close() {
        return this.app.close()
    }
}