import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import config from '../config';
import routes from '../api';

export default ({ app }: { app: express.Application }) => {
    app.get('/status', (req, res) => {
        res.status(200).end();
    });
    app.head('/status', (req, res) => {
        res.status(200).end();
    });

    app.use(cors());
    app.use(bodyparser.json());

    app.use(config.api.prefix, routes());

    /// catch 404 and forward to error handler
    // app.use((req, res, next) => {
    //     const err = new Error('Not Found');
    //     err['status'] = 404;
    //     next(err);
    // });

    /// error handlers
    app.use((err, req, res, next) => {
        /**
         * Handle 401 thrown by express-jwt library
         */
        if (err.name === 'UnauthorizedError') {
            return res
                .status(err.status)
                .send({ message: err.message })
                .end();
        }
        return next(err);
    });
}