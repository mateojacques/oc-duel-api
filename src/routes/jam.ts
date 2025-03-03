import { Router } from "express";
import { routeHandler } from "../utils/wrappers";
import { createJam, getJamById, listJams } from "../controllers/jamController";

const router = Router();

router.get("/:jamId", routeHandler(getJamById));
router.get("/", routeHandler(listJams));
router.post("/", routeHandler(createJam));

export default router;