// middleware/errorHandler.js
module.exports = (err, req, res, next) => {
    console.error('Error:', err);
  
    if (res.headersSent) {
      return next(err);
    }
  
    res.status(500).json({ error: 'Internal Server Error' });
  };
  