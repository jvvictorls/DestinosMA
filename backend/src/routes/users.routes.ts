import {Router} from 'express';
import UsersController from '../controller/users.controller';

const router = Router();
const usersController = new UsersController();

router.get('/:id', async (req, res) => usersController.findById(req, res));

router.post('/', async (req, res) => usersController.create(req, res));

router.put('/:id', async (req, res) => usersController.update(req, res));

router.delete('/:id', async (req, res) => usersController.delete(req, res));

router.post('/:email', async (req, res) => usersController.findOne(req, res));

export default router;