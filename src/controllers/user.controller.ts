import { Request, Response } from "express";
import { Inject } from "typedi";
import { UserService } from "../services/user.service";

export class UserController {
  @Inject()
  private userService!: UserService;

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.userService.getUserById(Number(req.params.id));
      if (user) {
        res.json(user);
      } else {
        res.status(404).send("User not found");
      }
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }
}
