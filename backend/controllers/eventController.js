// controllers/eventController.js
import Event from '../models/event.js';

export const createEvent = async (req, res) => {
  const { date, time, title, instructor } = req.body;
  const event = new Event({ date, time, title, instructor });

  try {
    const newEvent = await event.save();
    notifyClients(newEvent); // Notify clients
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
