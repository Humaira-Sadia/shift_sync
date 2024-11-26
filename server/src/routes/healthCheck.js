// Create a route to check whether localhost is working or not 

const express = require('express');
const router = express.Router();

// Health check route
router.get('/health-check', (req, res) => {
  res.status(200).json({
    message: 'Server is up and running!',
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
