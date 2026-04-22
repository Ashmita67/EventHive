// controllers/attendanceController.js
import Registration from "../models/Registration.js";

export const scanQR = async (req, res) => {
  const { qrToken } = req.body;

  const registration = await Registration.findOne({ qrToken });

  if (!registration)
    return res.status(404).json({ msg: "Invalid QR" });

  if (registration.attended)
    return res.status(400).json({ msg: "Already marked" });

  registration.attended = true;
  registration.timestamp = new Date();

  await registration.save();

  res.json({ msg: "Attendance marked" });
};