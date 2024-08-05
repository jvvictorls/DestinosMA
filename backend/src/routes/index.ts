import { Router } from "express";
import spotsRoutes from "./spots.routes";
import usersRoutes from "./users.routes";
import loginRoutes from "./login.routes";

const router = Router();

router.use('/spots', spotsRoutes);

router.use('/users', usersRoutes);

router.use('/login', loginRoutes);

export default router;