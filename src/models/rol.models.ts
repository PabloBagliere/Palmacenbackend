import { RolDTO } from "../interfaces/roles.dto";

export class Rol implements RolDTO {

  id: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;

  generate(id: number, des: string, create: Date, update: Date) {
    this.id = id;
    this.description = des;
    this.createdAt = create;
    this.updatedAt = update;
  }
}