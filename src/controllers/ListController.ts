import { Request, Response } from "express";
import { List } from "../models/List";
import LoginController from "./LoginController";
import UserController from "./UserController";

export class ListController {
  static async createList(req: Request) {
    const user = await UserController.getLoggedUser(req);
    let name = req.body.name;

    try {
      let result = await List.insert({ name, user });
      return result.identifiers[0].id;
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

  static async updateList(req: Request) {
    let id = req.body.id;
    let name = req.body.name;

    console.log(id, name);

    const list = await List.findOne(id);

    if (list.user.id === await UserController.getLoggedUserID(req)) {
      list.name = name;
      list.save();
      return true;
    }

    return false;
  }

  static async getTasks(req: Request, res: Response) {
    let listID = req.params.id;
    const list = await List.findOne(listID);
    res.send(await list.tasks);
  }
};
