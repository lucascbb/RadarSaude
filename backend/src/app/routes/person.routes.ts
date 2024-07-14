import { Router } from 'express';
import PersonController from '../controllers/person.controller'

const routes = Router();


routes.get('/getAll', PersonController);

routes.post('/create', PersonController);

routes.patch('/update', PersonController);

routes.delete('/delete/:id', PersonController);


export default routes;
