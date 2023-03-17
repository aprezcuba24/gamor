import { doConnect } from "../entity";
import { User } from "../entity/user";

export const createUser = async (email: string, password: string) => {
  await doConnect();
  // TODO: In the future make a hash of the password.
  const user = new User({ email, password });
  return user.save()
};

export const login = async (email: string, password: string) => {
  await doConnect();
  const user = await User.findOne({ email })
  if (!user) {
    return null; // We can think throw an error
  }
  if (user.password !== password) {
    return null;
  }
  return user;
}
