import { EntityRepository, Repository } from "typeorm";
import { Roles } from "../database/entity/roles.entity";
import { Rol } from "../models/rol.models";
import { RolDTO } from "interfaces/roles.dto";

@EntityRepository(Roles)
export class RolesRepository extends Repository<Roles> {

  // Function for create role
  async create_Rol(description: string): Promise<Rol> {
    const temporal_Rol: Roles = new Roles();
    temporal_Rol.description = description;
    try {
      const rol: Roles = await this.save(temporal_Rol);
      const model_Rol: Rol = new Rol();
      model_Rol.generate(rol.id, rol.description, rol.createdAt, rol.updatedAt);
      return model_Rol;
    } catch (error) {
      return error;
    }
  }

  // Function for get one rol specific
  async get_One_Rol(id: string): Promise<Rol> {
    const model_Rol: Rol = new Rol();
    const temporal_Rol: Roles | undefined = await this.findOne(id);
    if (temporal_Rol == undefined) {
      throw new Error("role not found");
    }
    model_Rol.generate(
      temporal_Rol.id,
      temporal_Rol.description,
      temporal_Rol.createdAt,
      temporal_Rol.updatedAt
    );
    return model_Rol;
  }

  // Function for get all roles
  async get_All_Rol(): Promise<RolDTO[]> {
    try {
    const temporal_Rol = await this.find();
    return temporal_Rol;
    } catch (error) {
      console.log("ERROR: ", error)
      return error;
    }
  }

  // Function for update rol
  async update_Rol(id: string, description: string): Promise<Rol> {
    const model_Rol: Rol = new Rol();
    const temporal_Rol: Roles | undefined = await this.findOne(id);
    if (temporal_Rol == undefined) {
      throw new Error("role not found");
    }
    temporal_Rol.description = description;
    try {
      await this.save(temporal_Rol);
      model_Rol.generate(
        temporal_Rol.id,
        temporal_Rol.description,
        temporal_Rol.createdAt,
        temporal_Rol.updatedAt
      );
      return model_Rol;
    } catch (error) {
      return error;
    }
  }

  // Function for delete rol
  async delete_Rol(id: string): Promise<Number> {
    try {
      const affected: number | null | undefined = (await this.delete(id))
        .affected;
      if (affected == null || affected == undefined || affected == 0) {
        throw new Error("role not found");
      }
      return affected;
    } catch (error) {
      return error;
    }
  }
}
