import { sign, verify } from "jsonwebtoken";
import { User } from "./models/User";

export const checkIfValidToken = (token: string) => {
  try {
    verify(token, process.env.TOKEN_KEY!);
    return true;
  } catch {
    return false;
  };
};

export const createToken = (user: User) => {
  let payload = { id: user.id, name: user.name };
  return sign(payload, process.env.TOKEN_KEY!, { expiresIn: '15m' });
}
