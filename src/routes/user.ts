import { Router } from "express";
import { routeHandler } from "../utils/wrappers";
import { createUser, getUserById } from "../controllers/userController";

const router = Router();

router.get("/:userId", routeHandler(getUserById));
router.post("/", routeHandler(createUser));

export default router;