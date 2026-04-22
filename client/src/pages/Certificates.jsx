// pages/Certificates.jsx
import { useState } from "react";
import API from "../services/api";

const Certificates = () => {
  const [cert, setCert] = useState("");

  const generate = async (id) => {
    const res = await API.post(`/certificates/${id}`);
    setCert(res.data.certificate);
  };

  return (
    <div>
      <h2>Certificates</h2>
      <button onClick={()=>generate("REGISTRATION_ID")}>
        Generate Certificate
      </button>

      {cert && (
        <a href={`http://localhost:5000/${cert}`} target="_blank">
          Download Certificate
        </a>
      )}
    </div>
  );
};

export default Certificates;