import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  title: { type: String, required: true },
  instructor: { type: String, required: true }
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
