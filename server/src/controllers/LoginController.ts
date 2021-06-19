import { User } from '../models/User';
import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface LoginResponse {
  success: boolean;
  token?: string;
};

class LoginController {
  static register = async (req: any) => {
    let { name, lastName, email, password } = req.body;

    if (await User.findOne({ email }))
      return false;

    const hashSenha = await hash(password, 12);
    User.insert({ name, lastName, email, password: hashSenha });
    return true;
  };

  static login = async (req: any, res: any) => {
    let { email, password } = req.body;
    let response : LoginResponse = {success: false};

    const user = await User.findOne({ email });
    if (!user) {
      res.cookie('access', response);
      return response;
    }

    const valid = await compare(password, user.password);

    if (valid) {
      response.success = true;
      response.token = LoginController.gerarToken(email, user.name);
    }

    res.cookie('access', response);
    return response;
  }

  private static gerarToken = (email: string, name: string) => {
    let payload = { email, name };
    return sign(payload, process.env.TOKEN_KEY, { expiresIn: '10min' });
  }

};

export default LoginController;
