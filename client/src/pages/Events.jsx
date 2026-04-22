// pages/Events.jsx
import { useEffect, useState } from "react";
import API from "../services/api";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    API.get("/events").then(res => setEvents(res.data));
  }, []);

  const register = async (id) => {
    await API.post("/registrations", { eventId: id });
    alert("Registered!");
  };

  return (
    <div>
      <h2>Events</h2>
      {events.map(e => (
        <div key={e._id}>
          <h3>{e.title}</h3>
          <button onClick={()=>register(e._id)}>
            Register
          </button>
        </div>
      ))}
    </div>
  );
};

export default Events;