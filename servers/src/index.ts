import 'dotenv/config'
import "reflect-metadata";
// import {createConnection} from "typeorm";
// import {User} from "./entity/User";

// createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));
import fastify from 'fastify';

const PORT = parseInt(process.env.PORT, 10);

const app = fastify({logger: true})
app.get('/', (req, reply) => {
    reply.send({hello: 'world'})
})
console.log(PORT)
app.listen(PORT, (err,address) => {
    if(err){
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`server listenig on ${address}`)
})