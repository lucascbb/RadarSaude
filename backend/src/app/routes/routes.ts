import { Router } from 'express';
import usersRoutes from './Users.routes';

const routes = Router();

routes.use('/api', usersRoutes);

export default routes;
