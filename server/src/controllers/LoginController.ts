import { User } from '../models/User';
import { compare, hash } from 'bcrypt';
import { createToken } from '../auth';
import { Request, Response } from 'express';
class LoginController {
  static register = async (req: Request) => {
    let { name, lastName, email, password } = req.body;

    if (await User.findOne({ email }))
      return false;

    const hashSenha = await hash(password, 12);
    User.insert({ name, lastName, email, password: hashSenha });
    return true;
  };

  static login = async (req: Request, res: Response) => {
    let { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return false;

    const valid = await compare(password, user.password);

    if (!valid) return false;

    res.cookie('access', createToken(user));
    return true;
  }

  static logout = async (res: Response) => {
      res.clearCookie('access');
      res.send(true);
  }
};

export default LoginController;
