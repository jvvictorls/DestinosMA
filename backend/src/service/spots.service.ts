import { ServiceResponse } from "../interfaces/ServiceResponse";
import ISpot from "../interfaces/Spots/ISpot";
import SpotsModel from "../model/spots.model";

class SpotsService {
  constructor(
    private spotsModel: SpotsModel = new SpotsModel()
  ) {}
  
  async findAll() {
    const findAllSpots = await this.spotsModel.findAll();
    if (!findAllSpots) {
      return {status: 'NOT_FOUND', message: 'Spots not found'};
    }
    return {status: 'SUCCESSFUL', data: findAllSpots};
  }

  async findOne(id: number) {
    const findSpot = await this.spotsModel.findOne(id);
    if (!findSpot) {
      return {status: 'NOT_FOUND', message: 'Spot not found'};
    }
    return {status: 'SUCCESSFUL', data: findSpot};
  }

  async create(spot: ISpot) {
    const createSpot = await this.spotsModel.create(spot);
    if (!createSpot) {
      return {status: 'BAD_REQUEST', message: 'Spot not created'};
    }
    return {status: 'CREATED', data: createSpot};
  }

  async update(id: number, spot: ISpot) {
    const updateSpot = await this.spotsModel.update(id, spot);
    if (!updateSpot) {
      return {status: 'BAD_REQUEST', message: 'Spot not updated'};
    }
    return {status: 'SUCCESSFUL', data: updateSpot};
  }

  async delete(id: number) {
    const deleteSpot = await this.spotsModel.delete(id);
    if (!deleteSpot) {
      return {status: 'BAD_REQUEST', message: 'Spot not deleted'};
    }
    return {status: 'SUCCESSFUL'};
  }
}

export default SpotsService;