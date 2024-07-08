// models/notification.js
import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  time: { type: Date, default: Date.now },
  title: String,
  instructor: String
});

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;
