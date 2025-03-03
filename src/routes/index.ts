import { Request, Response, Router } from "express";
import userRoutes from "./user";
import jamRoutes from "./jam";

const router = Router();

router.get("/health", (req: Request, res: Response) => {
  res.send("Welcome to the Node.js + TypeScript API!");
});
router.use("/users", userRoutes);
router.use("/jams", jamRoutes);

export default router;
