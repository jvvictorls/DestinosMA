import { Request, Response } from "express";
import ILogin from "../interfaces/Login/ILogin";
import LoginService from "../service/login.service";
import mapStatusHTTP from "../utils/mapHttpStatus";

class LoginController {
  private loginService: LoginService;
  constructor() {
    this.loginService = new LoginService();
  }

  async login(req: Request, res: Response) {
    const login: ILogin = req.body;
    const {status, data} = await this.loginService.login(login);
    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data);
    }
    res.status(200).json(data);
  }
}

export default LoginController;