import { Request } from "express";
import { List } from "../models/List";
import UserController from "./UserController";

export class ListController {
  static async createList(req: Request) {
    const user = await UserController.getLoggedUser(req);
    let name = req.body.name;

    try {
      await List.insert({ name, user });
      return "OK";
    } catch (err) {
      console.log(err);
    }
  }

  static async getLists(req: Request) {
    const user = await UserController.getLoggedUser(req);
    const lists = await user.lists;

    lists.sort((a: List, b: List) => (a.name < b.name) ? -1 : 1);

    return lists;
  }

  static async removeList(req: Request) {
    let id = req.params.id;
    try {
      await List.delete({ id });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
};
