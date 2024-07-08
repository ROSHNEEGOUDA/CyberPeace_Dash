import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import { errorHandler } from './middlewares/error.js';
import videoRoutes from './routes/video.js';
import signUploadRoutes from './routes/sign-upload.js';
import courseRoutes from './routes/course.js'; // Add this line
import Course from './models/video.js';
import loginRegRoutes from './routes/login-reg.js'; // Add these
import eventRoutes from './routes/event.js';
import { Server } from 'socket.io';
import http from 'http';

dotenv.config();

const app = express();
const port = process.env.VITE_PORT || 5000;

let notifications = []; // In-memory storage for notifications

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/videos', videoRoutes);
app.use('/api/sign-upload', signUploadRoutes);
app.use('/api/courses', courseRoutes); // Add this line
app.use('/api/event', eventRoutes);
app.get('/api/courses', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// login routes
app.use("/api", loginRegRoutes);

// Error handler middleware
app.use(errorHandler);

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

// Socket.IO connection
io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Notify clients about new events
const notifyClients = (event) => {
    io.emit('newEvent', event);
};

// Example route to create an event and notify clients
app.post('/api/event', async (req, res) => {
    try {
        const { time, title, instructor } = req.body;

        // Save event to the database (example, replace with your own logic)
        const newEvent = { time, title, instructor }; // Replace with actual save logic
        notifications.push(newEvent); // Add to in-memory storage

        // Notify clients
        notifyClients(newEvent);

        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to clear notifications
app.post('/api/clear-notifications', (req, res) => {
    notifications = [];
    res.status(200).json({ message: "Notifications cleared" });
});

// Start server
server.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});

export { notifyClients };
