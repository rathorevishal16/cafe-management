import { Router } from "express";
import staffController from "../controller/staff.controller";

const router = Router();

router.post("/", staffController.createStaff);
router.get("/", staffController.getAllStaff);
router.get("/:id", staffController.getStaffById);
router.put("/:id", staffController.updateStaff);
router.delete("/:id", staffController.deleteStaff);

export default router;
