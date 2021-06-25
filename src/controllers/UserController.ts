import { verify } from "jsonwebtoken";

class UserController {
  static getLoggedUserFirstName(jwt: string) : string {
    try {
      const data = verify(jwt, process.env.TOKEN_KEY) as any;
      return data.name;
    } catch {
      return "INVÁLIDO";
    }
  }
};

export default UserController;
