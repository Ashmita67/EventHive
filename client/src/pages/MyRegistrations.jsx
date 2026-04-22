// pages/MyRegistrations.jsx
import { useEffect, useState } from "react";
import API from "../services/api";

const MyRegistrations = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/registrations/my").then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h2>My Registrations</h2>
      {data.map(reg => (
        <div key={reg._id}>
          <h3>{reg.event.title}</h3>
          <img src={reg.qrCode} width="200" />
        </div>
      ))}
    </div>
  );
};

export default MyRegistrations;