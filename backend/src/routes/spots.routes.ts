import { Router } from "express";
import SpotsController from "../controller/spots.controller";

const routes = Router();
const spotsModel = new SpotsController();

routes.get('/', async (req, res) => spotsModel.findAll(req, res));

routes.get('/:id', async (req, res) => spotsModel.findOne(req, res));

routes.post('/', async (req, res) => spotsModel.create(req, res));

routes.post('/:id', async (req, res) => spotsModel.update(req, res));

routes.delete('/:id', async (req, res) => spotsModel.delete(req, res));

export default routes;