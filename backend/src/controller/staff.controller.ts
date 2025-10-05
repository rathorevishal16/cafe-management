import { Request, Response } from "express";
import staffService from "../services/staff.service";

class StaffController {
    async createStaff (req: Request, res: Response) {
        try {
            const staff = await staffService.createStaff(req.body);
            res.status(201).json({success:true,"staff created successfully":staff});
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    };

    async getAllStaff (req: Request, res: Response){
        try {
            const staff = await staffService.getAllStaff();
            res.status(200).json(staff);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    };

    async getStaffById (req: Request, res: Response) {
        try {
            const staff = await staffService.getStaffById(req.params.id);
            if (!staff) {
                return res.status(404).json({ message: "Staff not found" });
            }
            res.status(200).json(staff);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    };

    async updateStaff (req: Request, res: Response)  {
        try {
            const staff = await staffService.updateStaff(req.params.id, req.body);
            if (!staff) {
                return res.status(404).json({ message: "Staff not found" });
            }
            res.status(200).json({success:true,"staff updated successfully":staff});
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    };

    async deleteStaff (req: Request, res: Response)  {
        try {
            const staff = await staffService.deleteStaff(req.params.id);
            if (!staff){
                 return res.status(404).json({ message: "Staff not found" })
            };
            res.status(200).json({ message: "Staff deleted successfully" });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}
export default new StaffController();