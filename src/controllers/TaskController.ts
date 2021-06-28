import { Request, Response } from "express";
import { List } from "../models/List";
import { Task } from "../models/Task";

export class TaskController {
  static async create(req: Request, res: Response) {
    const {name, list: listID} = req.body;
    const list = await List.findOne(listID);
    let task = await Task.insert({name, list});
    res.send(task.identifiers[0].id);
  }

  static async update(req: Request, res: Response) {
    const {name, id, done} = req.body;

    let task = await Task.findOne(id);
    task.name = name;
    task.done = Boolean(done);
    task.save();

    res.send("OK");
  }

  static async delete(req: Request, res: Response) {
    const {id} = req.params;
    await Task.delete(id);
    res.send("OK");
  }
};
