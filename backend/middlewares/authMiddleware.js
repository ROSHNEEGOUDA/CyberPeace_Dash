import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const jwtKey = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, jwtKey);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default verifyToken;
