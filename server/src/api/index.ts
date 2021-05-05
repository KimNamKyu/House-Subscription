import {Router} from 'express';
import user from './routes/user';
import subscription from './routes/Subscription';

export default () => {
    const app = Router();
    user(app);
    subscription(app);    
    return app;
}