// server/utils/generateQR.js
import QRCode from "qrcode";

const generateQR = async (data) => {
  try {
    return await QRCode.toDataURL(data); // base64 image
  } catch (err) {
    throw new Error("QR generation failed");
  }
};

export default generateQR;