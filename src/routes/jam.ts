import { Router } from "express";
import { routeHandler } from "../utils/wrappers";
import { createJam, getJamById } from "../controllers/jamController";

const router = Router();

router.get("/:jamId", routeHandler(getJamById));
router.post("/", routeHandler(createJam));

export default router;