import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { Container } from "typedi";

const userRouter = Router();

const userController = Container.get(UserController);

userRouter.post("/users", (req, res) => userController.createUser(req, res));
userRouter.get("/users/:id", (req, res) =>
  userController.getUserById(req, res)
);

export { userRouter };
