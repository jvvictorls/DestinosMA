import SequelizeSpots from "../database/models/SequelizeSpots";
import ISpot from "../interfaces/Spots/ISpot";
import ISpotsModel from "../interfaces/Spots/ISpotsModel";

class SpotsModel implements ISpotsModel{  
  private model = SequelizeSpots;
  
  async findAll(): Promise<ISpot[]> {
    const dbData = await this.model.findAll();
    return dbData;
  }
  
  async findOne(id: number): Promise<ISpot | null> {
    const dbData = await this.model.findByPk(id);
    if (!dbData) {
      return null;
    }
    return dbData;
  }
  
  async create(spot: ISpot): Promise<ISpot> {
    const insertData = await this.model.create(spot);
    const { id, name, description, city, type, tips, image, latitude, longitude } = insertData;
    return {id, name, description, city, type, tips, image, latitude, longitude};
  }
  
  async update(id: number, spot: ISpot): Promise<ISpot | null> {
    const updateData = await this.model.update(spot, { where: { id } });
    if (!updateData) {
      return null;
    }
    const { name, description, city, type, tips, image, latitude, longitude } = spot;
    return { id, name, description, city, type, tips, image, latitude, longitude };
  }
  
  async delete(id: number): Promise<boolean> {
    const deleteData = await this.model.destroy({ where: { id } });
    return deleteData ? true : false;
  } 

}

export default SpotsModel;
