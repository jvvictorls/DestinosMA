import { Request, Response } from "express";
import SpotsService from "../service/spots.service";
import mapStatusHTTP from "../utils/mapHttpStatus";

class SpotsController {
  constructor(
    private spotsService = new SpotsService()
  ) {}

  async findAll(_req: Request, res: Response) {
  const {status, data} = await this.spotsService.findAll();
  if(status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(status)).json(data);
  }
  return res.status(200).json(data);

  }

  async findOne(req: Request, res: Response) {
    const {id} = req.params;
    const {status, data} = await this.spotsService.findOne(Number(id));
    if(status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data);
    }
    return res.status(200).json(data);
  }

  async create(req: Request, res: Response) {
  const spot = req.body;
  const {status, data} = await this.spotsService.create(spot);
  if(status !== 'CREATED') {
    return res.status(mapStatusHTTP(status)).json(data);
  }
  return res.status(201).json(data);
  }

  async update(req: Request, res: Response) {
    const {id} = req.params;
    const spot = req.body;
    const {status, data} = await this.spotsService.update(Number(id), spot);
    if(status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data);
    }
    return res.status(200).json(data);
  }

  async delete(req: Request, res: Response) {
    const {id} = req.params;
    const {status, message} = await this.spotsService.delete(Number(id));
    if(status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json({message});
    }
    return res.status(204).json();
  }

} 

export default SpotsController;