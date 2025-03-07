import { Router } from "express";
import { routeHandler } from "../utils/wrappers";
import { createUser, getUserById, signIn } from "../controllers/userController";

const router = Router();

router.get("/:userId", routeHandler(getUserById));
router.post("/", routeHandler(createUser));
router.post("/signIn", routeHandler(signIn));

export default router;