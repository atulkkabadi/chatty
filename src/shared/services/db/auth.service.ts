import { IAuthDocument } from "@auth/interfaces/auth.interfaces";
import { AuthModel } from "@auth/models/auth.schema";
import { Helpers } from "@root/shared/helpers/helpers";
class AuthService{
  public async getUserByUsernameOrEmail(username: string, email: string): Promise<IAuthDocument>{
    const query = {
      $or: [{username: Helpers.firstLetterUppercase(username)}, {email: Helpers.lowerCase(email)}]
    };
    const user: IAuthDocument | null = await AuthModel.findOne(query).exec() as IAuthDocument;
    return user;
  }
}
export const authService: AuthService = new AuthService();
