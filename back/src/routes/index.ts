import { Router } from "express";

const router: Router = Router();

router.get("/users", (req, res) => {
  res.send("this is a response to /users request");
});

export default router;
