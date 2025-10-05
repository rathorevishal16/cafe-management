import Staff from "../models/staff.modle";

export const createStaffFactory = (data: any) => {
  return new Staff({
    name: data.name,
    email: data.email,
    phone: data.phone,
    role: data.role || "waiter",
    password: data.password 
  });
};
