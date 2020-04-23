import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { RolesRepository } from "../repository/roles.repository";
import { Rol } from "models/rol.models";
import { RolDTO } from "interfaces/roles.dto";

const createRepository = (): RolesRepository => {
  return getCustomRepository(RolesRepository, process.env.NODE_ENV);
};

export const createRol = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const repository: RolesRepository = createRepository();
  try {
    const description: string = req.body.description;
    if(description.length >= 50 || description.length == 0) {
      return res.status(202).json({
        Massage: "The description does not comply with the request"
      });
    } 
    const answer: Rol = await repository.create_Rol(req.body.description);
    return res.status(201).json(answer);
  } catch (error) {
    return res.status(400).json({
      Massage: "Role not possible to create"
    });
  }
};

export const getOneRol = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const repository: RolesRepository = createRepository();
  try {
    const answer: Rol = await repository.get_One_Rol(req.params.id);
    return res.json(answer);
  } catch (error) {
    return res.status(202).json({
      Massage: "Role not found",
    });
  }
};

export const getAllRol = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const repository: RolesRepository = createRepository();
  const answer: RolDTO[] = await repository.get_All_Rol();
  return res.json(answer);
};

export const updateRol = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const repository: RolesRepository = createRepository();
  try {
    const answer: Rol = await repository.update_Rol(
      req.params.id,
      req.body.description
    );
    return res.json(answer);
  } catch (error) {
    return res.status(202).json({
      Massage: "Role not found",
    });
  }
};

export const deleteRol = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const repository: RolesRepository = createRepository();
  try {
    const answer: Number = await repository.delete_Rol(req.params.id);
    if (answer > 0) {
      return res.json({
        affectad: answer,
        Message: "Rol delete sucess",
      });
    }
    return res.status(202).json({
      Massage: "Role not found",
    });
  } catch (error) {
    return res.status(202).json({
      Message: "Role not found",
    });
  }
};
