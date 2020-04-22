import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { RolesRepository } from "../repository/roles.repository";
import { Rol } from "models/rol.models";
import { RolDTO } from "interfaces/roles.dto";

export const createRol = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const repository: RolesRepository = getCustomRepository(RolesRepository);
  try {
    const answer: Rol = await repository.create_Rol(req.body.description);
    return res.json(answer);
  } catch (error) {
    return res.json({
      Status: 400,
      Message: "Role not possible to create",
    });
  }
};

export const getOneRol = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const repository: RolesRepository = getCustomRepository(RolesRepository);
  try {
    const answer: Rol = await repository.get_One_Rol(req.params.id);
    return res.json(answer);
  } catch (error) {
    return res.json({
      Status: 400,
      Message: "Role not found",
    });
  }
};

export const getAllRol = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const repository: RolesRepository = getCustomRepository(RolesRepository);
  const answer: RolDTO[] = await repository.get_All_Rol();
  return res.json(answer);
};

export const updateRol = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const repository: RolesRepository = getCustomRepository(RolesRepository);
  try {
    const answer: Rol = await repository.update_Rol(
      req.params.id,
      req.body.description
    );
    return res.json(answer);
  } catch (error) {
    return res.json({
      Status: 400,
      Message: "Role not found",
    });
  }
};

export const deleteRol = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const repository: RolesRepository = getCustomRepository(RolesRepository);
  try {
    const answer: Number = await repository.delete_Rol(req.params.id);
    if(answer > 0) {
      return res.json({
        affectad: answer,
        Message: "Rol delete sucess",
      });
    }
    return res.json({
      Status: 400,
      Message: "Role not found",
    });
  } catch (error) {
    return res.json({
      Status: 400,
      Message: "Role not found",
    });
  }
};
