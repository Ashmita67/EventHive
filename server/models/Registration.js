// server/models/Registration.js
import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event"
  },
  qrCode: String,
  attended: {
    type: Boolean,
    default: false
  },
  qrToken: {
  type: String,
  unique: true
},
  timestamp: Date
}, { timestamps: true });

export default mongoose.model("Registration", registrationSchema);