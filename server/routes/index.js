import { Router } from 'express';
import propertyController from '../controllers/controllerProperty.js';
const routes = Router();

routes.get('/', propertyController.getAllProperties);

routes.get('/:id', propertyController.getSingleProperty);

export default routes;
