import { Router } from "express";
import { categires_routes } from "./categories.routes";
import { specificationsRoutes } from "./specification.routes";

const router = Router();

router.use("/categories", categires_routes);
router.use("/specifications", specificationsRoutes);

export { router }