import { User } from '../models/User';
import { compare, hash } from 'bcrypt';
import { Request, Response } from 'express';
import { sign, verify } from 'jsonwebtoken';

class LoginController {
  static register = async (req: Request) => {
    let { name, lastName, email, password } = req.body;

    if (await User.findOne({ email }))
      return false;

    const hashSenha = await hash(password, 12);

    try {
      await User.insert({ name, lastName, email, password: hashSenha });
    } catch {
      return false;
    }

    return true;
  };

  static login = async (req: Request, res: Response) => {
    let { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return false;

    const valid = await compare(password, user.password);

    if (!valid) return false;

    LoginController.generateCookie(res, user);
    return true;
  }

  static auth = async (req: Request, res: Response) => {
    const token = req.cookies.access;
    return await LoginController.validateToken(res, token);
  };

  private static validateToken = async (res: Response, token: string) => {
    try {
      const payload = verify(token, process.env.TOKEN_KEY!) as any;
      const user = await User.findOne({ id: payload.id });

      LoginController.generateCookie(res, user);

      return true;
    } catch {
      return false;
    };
  };

  static logout = (res: Response) => {
    res.clearCookie('access');
    res.send(true);
  }

  private static createToken = (user: User) => {
    let payload = { id: user.id, name: user.name };
    return sign(payload, process.env.TOKEN_KEY!, { expiresIn: '15m' });
  };

  private static generateCookie = (res: Response, user: User) => {
    res.clearCookie('access');
    res.cookie('access', LoginController.createToken(user), { sameSite: 'lax' });
  }
};

export default LoginController;
