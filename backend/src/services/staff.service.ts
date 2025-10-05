import Staff from "../models/staff.modle";
import { createStaffFactory } from "../factories/staff.factory";

class staffService {
  async createStaff(data: any) {
    const staff = createStaffFactory(data);
    return await staff.save();
  };

  async getAllStaff() {
    return await Staff.find();
  };

  async getStaffById(id: string) {
    return await Staff.findById(id);
  };

  async updateStaff(id: string, data: any) {
    return await Staff.findByIdAndUpdate(id, data, { new: true });
  };

  async deleteStaff(id: string) {
    return await Staff.findByIdAndDelete(id);
  };

}
export default new staffService();
