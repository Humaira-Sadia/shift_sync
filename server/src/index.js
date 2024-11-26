const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const { healthCheck } = require('./routes');

// Load environment variables from .env file
dotenv.config();

// Create an instance of the Express app
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Use health check route
// app.use('/health-check', healthCheck)

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error));

// Example route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
