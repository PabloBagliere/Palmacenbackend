import { Router } from "express";

import {
  createRol,
  getOneRol,
  getAllRol,
  updateRol,
  deleteRol,
} from "../controllers/rol.controller";
const router = Router();

router.post("/", createRol);
router.get("/:id", getOneRol);
router.get("/", getAllRol);
router.put("/:id", updateRol);
router.delete("/:id", deleteRol);
export default router;
