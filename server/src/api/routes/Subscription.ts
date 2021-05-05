import { subscription } from '../../entity/subscription';
import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';
const route = Router();

export default (app: Router) => {
  app.use('/subscription', route);

  route.get('/', async (req: Request, res: Response) => {
      try {
        const data = await getRepository(subscription).find()
        return res.status(200).json(data)    
      } catch (error) {
        console.error(error)
      }
      
  })
//   route.get('/me', middlewares.isAuth, middlewares.attachCurrentUser, (req: Request, res: Response) => {
//     return res.json({ user: req.currentUser }).status(200);
//   });
};