const healthCheck = require('./healthCheck')

// Exporting all routes together
module.exports = {
  ...healthCheck
};
