import { Router } from "express";
import { routeHandler } from "../utils/wrappers";
import { createJam, getJamById, listJams } from "../controllers/jamController";
import isAuth from "../middlewares/auth";

const router = Router();

router.get("/:jamId", routeHandler(getJamById));
router.get("/", routeHandler(listJams));
router.post("/", isAuth, routeHandler(createJam));

export default router;