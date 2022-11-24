import { User } from "./../store/user/user.type";

class UserService {
  localApiUrl: string = process.env.REACT_APP_API_HOST as string;
  async login(user: User): Promise<any> {
    const response = await fetch(`${this.localApiUrl}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const statusCode = response.status;
    const data = await response.json();
    return { statusCode, data };
  }
}

const userService = new UserService();
export default userService;
