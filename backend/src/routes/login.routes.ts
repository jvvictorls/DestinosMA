import LoginController from "../controller/login.controller";
import { Request, Response, Router } from "express";

const router = Router();
const loginController = new LoginController();

router.post('/', async(req: Request, res: Response) => loginController.login(req, res));

export default router;