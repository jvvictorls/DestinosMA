import { Request, Response } from 'express';
import UsersService from "../service/users.service";


class UsersController {
  private usersService: UsersService;

  constructor() {
    this.usersService = new UsersService();
  }

  async findOne(req: Request, res: Response) {
    const {email} = req.body;
    const {status, data} = await this.usersService.findOne(email);
   if(status !== 'SUCCESSFUL')
    return res.status(200).json(data);
  }

  async findById(req: Request, res: Response) {
    const {id} = req.params;
    const {status, data} = await this.usersService.findById(Number(id))
    if( status !== 'SUCCESSFUL') {
      return res.status(400).json({message: 'User not found'});
    }
    return res.status(200).json(data);

  }

  async create(req: Request, res: Response) {
    const user = req.body;
    const {status, data} = await this.usersService.create(user);
    if(status !== 'SUCCESSFUL') {
      return res.status(400).json({message: 'User not created'});
    }
    return res.status(200).json(data);
  }

  async update(req: Request, res: Response) {
    const {id} = req.params;
    const user = req.body;
    const {status, data} = await this.usersService.update(Number(id), user);
    if(status !== 'SUCCESSFUL') {
      return res.status(400).json({message: 'User not updated'});
    }
    return res.status(200).json(data);
  }

  async delete(req: Request, res: Response) {
    const {id} = req.params;
    const {status, message} = await this.usersService.delete(Number(id));
    if(status !== 'SUCCESSFUL') {
      return res.status(400).json({message: 'User not deleted'});
    }
    return res.status(204).json();

  }
}

export default UsersController;