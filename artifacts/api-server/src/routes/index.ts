import { Router, type IRouter } from "express";
import healthRouter from "./health";
import linguisticsRouter from "./linguistics";

const router: IRouter = Router();

router.use(healthRouter);
router.use("/linguistics", linguisticsRouter);

export default router;
