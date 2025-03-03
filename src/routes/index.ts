import { Request, Response, Router } from "express";
import userRoutes from "./user";

const router = Router();

router.get("/health", (req: Request, res: Response) => {
  res.send("Welcome to the Node.js + TypeScript API!");
});
router.use("/users", userRoutes);

export default router;
