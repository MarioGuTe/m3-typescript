import { Request, Response } from "express";
import IUser from "../interfaces/IUser";
import {
  createUserService,
  getUsersService,
  deleteUsersService,
} from "../services/usersService";

export const createUser = async (req: Request, res: Response) => {
  const { name, email, active } = req.body;
  const newUser: IUser = await createUserService({ name, email, active });
  res.status(201).json(newUser);
};
export const getUsers = async () => {};
export const deleteUser = async () => {};
