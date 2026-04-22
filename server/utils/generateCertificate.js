// server/utils/generateCertificate.js
import PDFDocument from "pdfkit";
import fs from "fs";

const generateCertificate = (name, event) => {
  const doc = new PDFDocument();

  const filePath = `certificates/${name}-${Date.now()}.pdf`;

  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(25).text("Certificate of Participation", {
    align: "center"
  });

  doc.moveDown();

  doc.fontSize(16).text(`This is to certify that`, {
    align: "center"
  });

  doc.moveDown();

  doc.fontSize(20).text(name, { align: "center" });

  doc.moveDown();

  doc.text(`has successfully participated in ${event}`, {
    align: "center"
  });

  doc.end();

  return filePath;
};

export default generateCertificate;