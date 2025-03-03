import { Request, Response, Router } from "express";

const router = Router();

router.get("/health", (req: Request, res: Response) => {
  res.send("Welcome to the Node.js + TypeScript API!");
});

export default router;
