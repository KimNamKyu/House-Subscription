import express from 'express';
import config from './config';
import cors from 'cors';
import bodyparser from 'body-parser';

const startServer = async () => {
    const app = express();

    /**
   * A little hack here
   * Import/Export can only be used in 'top-level code'
   * Well, at least in node 10 without babel and at the time of writing
   * So we are using good old require.
   **/
    await require('./loaders').default({ expressApp: app });

    app.listen(config.port, () => {
        console.log('Server listening on port: 3065')
    }).on('err', () => {
        console.log('error')
        process.exit(1);
    })
}

startServer();
