// controllers/eventController.js
import Event from "../models/Event.js";

// CREATE EVENT
export const createEvent = async (req, res) => {
  const event = await Event.create({
    ...req.body,
    createdBy: req.user.id
  });
  res.json(event);
};

// GET ALL EVENTS
export const getEvents = async (req, res) => {
  const events = await Event.find().populate("createdBy", "name");
  res.json(events);
};

// GET SINGLE EVENT
export const getEventById = async (req, res) => {
  const event = await Event.findById(req.params.id);
  res.json(event);
};

// DELETE EVENT
export const deleteEvent = async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ msg: "Event deleted" });
};