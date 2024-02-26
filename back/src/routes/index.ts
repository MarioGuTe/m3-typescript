import { Router } from "express";
import {
  createUser,
  getUsers,
  deleteUser,
} from "../controllers/usersController";

const router: Router = Router();

router.post("/users", createUser);

router.get("/users", (req, res) => {
  res.send("this is a response to /users request");
});

export default router;
