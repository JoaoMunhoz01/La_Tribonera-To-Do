import { Request } from "express";
import { verify } from "jsonwebtoken";
import { User } from "../models/User";

class UserController {
  static getLoggedUserFirstName(jwt: string): string {
    try {
      const data = verify(jwt, process.env.TOKEN_KEY) as any;
      return data.name;
    } catch {
      return "INVÁLIDO";
    }
  }

  static async getLoggedUser(req: Request) {
    const jwt = req.cookies.access;

    try {
      const data = verify(jwt, process.env.TOKEN_KEY) as any;
      return await User.findOne({ id: data.id });
    } catch {
      throw new Error('Could not find user');
    }
  }

  static async getLoggedUserID(req: Request) {
    return (await this.getLoggedUser(req)).id;
  }
};

export default UserController;
