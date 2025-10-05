import mongoose, { Schema } from "mongoose";

const staffSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    role: { type: String, enum: ["manager", "chef", "waiter"], default: "waiter" },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

const Staff = mongoose.model("Staff", staffSchema);
export default Staff;
