// controllers/certificateController.js
import Registration from "../models/Registration.js";
import generateCertificate from "../utils/generateCertificate.js";

export const generateCert = async (req, res) => {
  const { registrationId } = req.params;

  const reg = await Registration.findById(registrationId)
    .populate("user")
    .populate("event");

  if (!reg.attended)
    return res.status(400).json({ msg: "Attendance not marked" });

  const filePath = generateCertificate(
    reg.user.name,
    reg.event.title
  );

  res.json({ certificate: filePath });
};