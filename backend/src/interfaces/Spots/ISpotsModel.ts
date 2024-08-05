import ISpot from "./ISpot"
export default interface ISpotsModel {
  findAll(): Promise<ISpot[]>;
  findOne(id: number): Promise<ISpot | null>;
  create(spot: ISpot): Promise<ISpot>;
  update(id: number, spot: ISpot): Promise<ISpot | null>;
  delete(id: number): Promise<boolean>;
}