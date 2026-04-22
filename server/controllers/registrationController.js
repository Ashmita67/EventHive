// controllers/registrationController.js
import { v4 as uuidv4 } from "uuid";
import generateQR from "../utils/generateQR.js";
import Registration from "../models/Registration.js";

export const registerEvent = async (req, res) => {
  const { eventId } = req.body;

  const exists = await Registration.findOne({
    user: req.user.id,
    event: eventId
  });

  if (exists)
    return res.status(400).json({ msg: "Already registered" });

  const qrToken = uuidv4();

  const qrCode = await generateQR(
    JSON.stringify({
      qrToken,
      userId: req.user.id,
      eventId
    })
  );

  const registration = await Registration.create({
    user: req.user.id,
    event: eventId,
    qrCode,
    qrToken
  });

  res.json(registration);
};