import UsersService from "./users.service";
import ILogin from "../interfaces/Login/ILogin";
import ILoginResponse from "../interfaces/Login/ILoginResponse";
import { ServiceResponse } from "../interfaces/ServiceResponse";

class LoginService {
  private userService: UsersService;

  constructor() {
    this.userService = new UsersService();
  }

  async login(login: ILogin): Promise<ServiceResponse<ILoginResponse>> {
    
    if (!login.email || !login.password) {
      return {status: 'BAD_REQUEST', data: {message: 'Email and password are required'}};
    }
    
    const {data} = await this.userService.findOne(login.email);
    if (!data) {
      return {status: 'NOT_FOUND', data: {message: 'User not found'}};
    }

    if (data.password !== login.password) {
      return {status: 'UNAUTHORIZED', data: {message: 'Invalid password'}};
    }

    const {id, password, ...userData} = data;

    return {status: 'SUCCESSFUL', data: userData};
  }
}

export default LoginService;